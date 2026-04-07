"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/Button";
import { Checkbox, Input, Label, Select } from "@/components/FormControls";
import { submitContactAssessment, type ContactFormState } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

type FormContent = {
  title: string;
  eyebrow: string;
  subtitle: string;
  fields: {
    name: string;
    company: string;
    industry: string;
    email: string;
    users: string;
    phone: string;
    setup: string;
    goal: string;
  };
  industryPlaceholder: string;
  usersOptions: readonly string[];
  submitLabel: string;
  privacyNote: string;
  consentLabel: string;
};

const initialState: ContactFormState = {
  status: "idle",
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm" disabled={pending} aria-disabled={pending}>
      {pending ? "Sending..." : label}
    </Button>
  );
}

export function ContactAssessmentForm({ form }: { form: FormContent }) {
  const [state, formAction] = useActionState(submitContactAssessment, initialState);
  const fieldErrors = state.fieldErrors ?? {};
  const values = state.values ?? {};

  return (
    <>
      <div className="mb-6 max-w-[760px]">
        <p className="msp-eyebrow">{form.eyebrow}</p>
        <h2 className="msp-subsection-title mt-2">{form.title}</h2>
        <p className="msp-body mt-3">{form.subtitle}</p>
      </div>

      <form action={formAction} className="grid gap-4" aria-label={form.title}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

        {state.message ? (
          <div
            className={cn(
              "rounded-[10px] border px-4 py-3 text-[14px] leading-relaxed",
              state.status === "success"
                ? "border-[#d8eddc] bg-[#eef9f1] text-[#256146]"
                : "border-[#f3d6da] bg-[#fff6f7] text-[#9f2434]",
            )}
          >
            {state.message}
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">{form.fields.name}</Label>
            <Input id="contact-name" name="name" defaultValue={values.name} className="mt-2 h-[40px]" />
            {fieldErrors.name ? <p className="mt-2 text-[13px] text-[#b42318]">{fieldErrors.name}</p> : null}
          </div>
          <div>
            <Label htmlFor="contact-email">{form.fields.email}</Label>
            <Input id="contact-email" name="email" type="email" defaultValue={values.email} className="mt-2 h-[40px]" />
            {fieldErrors.email ? <p className="mt-2 text-[13px] text-[#b42318]">{fieldErrors.email}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="contact-company">{form.fields.company}</Label>
            <Input id="contact-company" name="company" defaultValue={values.company} className="mt-2 h-[40px]" />
            {fieldErrors.company ? <p className="mt-2 text-[13px] text-[#b42318]">{fieldErrors.company}</p> : null}
          </div>
          <div>
            <Label htmlFor="contact-industry">{form.fields.industry}</Label>
            <Input
              id="contact-industry"
              name="industry"
              placeholder={form.industryPlaceholder}
              defaultValue={values.industry}
              className="mt-2 h-[40px]"
            />
          </div>
          <div>
            <Label htmlFor="contact-users">{form.fields.users}</Label>
            <Select id="contact-users" name="users" defaultValue={values.users || "Select"} className="mt-2 h-[40px]">
              {form.usersOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
            {fieldErrors.users ? <p className="mt-2 text-[13px] text-[#b42318]">{fieldErrors.users}</p> : null}
          </div>
        </div>

        <div>
          <Label htmlFor="contact-phone">{form.fields.phone}</Label>
          <Input id="contact-phone" name="phone" defaultValue={values.phone} className="mt-2 h-[40px]" />
        </div>

        <div>
          <Label htmlFor="contact-setup">{form.fields.setup}</Label>
          <textarea
            id="contact-setup"
            name="setup"
            defaultValue={values.setup}
            className="mt-2 min-h-[84px] w-full rounded-md border border-gray-100 bg-white px-4 py-2 text-[15px] text-msp-ink outline-none focus:border-msp-blue"
          />
          {fieldErrors.setup ? <p className="mt-2 text-[13px] text-[#b42318]">{fieldErrors.setup}</p> : null}
        </div>

        <div>
          <Label htmlFor="contact-goal">{form.fields.goal}</Label>
          <Input id="contact-goal" name="goal" defaultValue={values.goal} className="mt-2 h-[40px]" />
        </div>

        <label className="inline-flex items-center gap-2 text-[14px] leading-relaxed text-msp-muted">
          <Checkbox name="consent" defaultChecked={values.consent} />
          {form.consentLabel}
        </label>
        {fieldErrors.consent ? <p className="-mt-2 text-[13px] text-[#b42318]">{fieldErrors.consent}</p> : null}

        <div>
          <SubmitButton label={form.submitLabel} />
        </div>
        <p className="text-[14px] leading-relaxed text-msp-muted">{form.privacyNote}</p>
      </form>
    </>
  );
}
