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
const supportEmail = "info@triad-it.co.uk";
const supportPhone = "0131 358 0579";
const supportWebsite = "https://triad-it.co.uk";
const emailLogoUrl = `${supportWebsite}/images/icons/logo-icon-email.png`;

const getValue = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

async function sendResendEmail({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  apiKey: string;
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });
}

async function getErrorText(response: Response) {
  try {
    return await response.text();
  } catch {
    return "";
  }
}

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
  const toEmail = process.env.CONTACT_TO_EMAIL ?? supportEmail;

  if (!resendApiKey || !fromEmail) {
    return {
      status: "error",
      message:
        "Email delivery is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL (for example, TRIAD IT <info@triad-it.co.uk>) in Vercel to enable form submissions.",
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

  const response = await sendResendEmail({
    apiKey: resendApiKey,
    from: fromEmail,
    to: [toEmail],
    replyTo: values.email,
    subject,
    text: lines.join("\n"),
    html,
  });

  if (!response.ok) {
    return {
      status: "error",
      message: "We could not send your request right now. Please email info@triad-it.co.uk instead.",
      values,
    };
  }

  const confirmationSubject = "We received your TRIAD IT request";
  const confirmationText = [
    `Hi ${values.name},`,
    "",
    "Thanks for contacting TRIAD IT.",
    "We have received your request and will review it shortly.",
    "",
    "We will respond within one business day.",
    "",
    "TRIAD IT",
    supportEmail,
    supportPhone,
    supportWebsite,
  ].join("\n");

  const confirmationHtml = `
    <div style="margin: 0; padding: 0; background: #f6f8fc;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background: #f6f8fc;">
        <tr>
          <td style="padding: 32px 16px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; border-collapse: collapse; background: #ffffff; border: 1px solid #dbe3f0; border-radius: 12px;">
              <tr>
                <td style="padding: 32px 32px 24px; font-family: Arial, sans-serif; color: #101826; line-height: 1.6;">
                  <p style="margin: 0 0 16px; font-size: 16px;">Hi ${values.name},</p>
                  <p style="margin: 0 0 16px; font-size: 16px;">Thanks for contacting TRIAD IT.</p>
                  <p style="margin: 0 0 16px; font-size: 16px;">We have received your request and will review it shortly.</p>
                  <p style="margin: 0; font-size: 16px;">We will respond within one business day.</p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 28px; border-collapse: collapse; border-top: 1px solid #dbe3f0;">
                    <tr>
                      <td style="padding-top: 20px; width: 72px; vertical-align: top;">
                        <img
                          src="${emailLogoUrl}"
                          alt="TRIAD IT"
                          width="44"
                          height="44"
                          style="display: block; width: 44px; height: 44px; border: 0;"
                        />
                      </td>
                      <td style="padding-top: 16px; font-family: Arial, sans-serif; color: #101826; vertical-align: top;">
                        <div style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">TRIAD IT</div>
                        <div style="font-size: 14px; line-height: 1.7;">
                          <a href="tel:${supportPhone.replace(/\s+/g, "")}" style="color: #101826; text-decoration: none;">${supportPhone}</a><br />
                          <a href="mailto:${supportEmail}" style="color: #0b5ed7; text-decoration: none;">${supportEmail}</a><br />
                          <a href="${supportWebsite}" style="color: #0b5ed7; text-decoration: none;">${supportWebsite}</a>
                        </div>
                        <div style="margin-top: 10px; font-size: 13px; color: #5f6f85;">
                          Managed IT Services | Cybersecurity | Microsoft 365
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const confirmationResponse = await sendResendEmail({
    apiKey: resendApiKey,
    from: fromEmail,
    to: [values.email],
    replyTo: supportEmail,
    subject: confirmationSubject,
    text: confirmationText,
    html: confirmationHtml,
  }).catch((error) => {
    console.error("Contact confirmation email request failed:", error);
    return null;
  });

  if (!confirmationResponse) {
    return {
      status: "success",
      message:
        "Your request has been sent. We received it successfully, but the confirmation email could not be delivered automatically.",
    };
  }

  if (!confirmationResponse.ok) {
    const confirmationError = await getErrorText(confirmationResponse);
    console.error("Contact confirmation email was rejected by Resend:", confirmationResponse.status, confirmationError);

    return {
      status: "success",
      message:
        "Your request has been sent. We received it successfully, but the confirmation email could not be delivered automatically.",
    };
  }

  return {
    status: "success",
    message: "Your request has been sent. We have also emailed you a confirmation and will respond within one business day.",
  };
}
