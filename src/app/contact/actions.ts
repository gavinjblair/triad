"use server";

type ContactFieldErrors = Partial<
  Record<"name" | "email" | "company" | "users" | "setup" | "consent", string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
  values?: {
    name?: string;
    email?: string;
    company?: string;
    industry?: string;
    users?: string;
    phone?: string;
    setup?: string;
    goal?: string;
    consent?: boolean;
  };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getValue = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

export async function submitContactAssessment(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = getValue(formData, "website");
  if (website) {
    return {
      status: "success",
      message: "Your request has been received. We will review it and respond shortly.",
    };
  }

  const values = {
    name: getValue(formData, "name"),
    email: getValue(formData, "email"),
    company: getValue(formData, "company"),
    industry: getValue(formData, "industry"),
    users: getValue(formData, "users"),
    phone: getValue(formData, "phone"),
    setup: getValue(formData, "setup"),
    goal: getValue(formData, "goal"),
    consent: formData.get("consent") === "on",
  };

  const fieldErrors: ContactFieldErrors = {};

  if (!values.name) fieldErrors.name = "Please enter your name.";
  if (!values.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!values.company) fieldErrors.company = "Please enter your company name.";
  if (!values.users || values.users === "Select") fieldErrors.users = "Please choose the number of users.";
  if (!values.setup) fieldErrors.setup = "Please outline your current IT setup.";
  if (!values.consent) fieldErrors.consent = "Please confirm you are happy to be contacted.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@triad-it.co.uk";

  if (!resendApiKey || !fromEmail) {
    return {
      status: "error",
      message:
        "Email delivery is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL in Vercel to enable form submissions.",
      values,
    };
  }

  const subject = `New TRIAD IT assessment request from ${values.name}`;
  const lines = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company}`,
    `Industry: ${values.industry || "Not provided"}`,
    `Users: ${values.users}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Primary goal: ${values.goal || "Not provided"}`,
    "",
    "Current IT setup:",
    values.setup,
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #101826; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New TRIAD IT assessment request</h2>
      <p><strong>Name:</strong> ${values.name}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Company:</strong> ${values.company}</p>
      <p><strong>Industry:</strong> ${values.industry || "Not provided"}</p>
      <p><strong>Users:</strong> ${values.users}</p>
      <p><strong>Phone:</strong> ${values.phone || "Not provided"}</p>
      <p><strong>Primary goal:</strong> ${values.goal || "Not provided"}</p>
      <h3 style="margin-top: 24px; margin-bottom: 8px;">Current IT setup</h3>
      <p style="white-space: pre-line;">${values.setup}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject,
      text: lines.join("\n"),
      html,
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message: "We could not send your request right now. Please email info@triad-it.co.uk instead.",
      values,
    };
  }

  return {
    status: "success",
    message: "Your request has been sent. We will respond within one business day.",
  };
}
