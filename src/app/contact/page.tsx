import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Checkbox, Input, Label, Select } from "@/components/FormControls";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  const { hero, process, form, trustPanel, direct, closingCta } = contactContent;

  return (
    <>
      <section className="bg-white py-20">
        <Container size="content">
          <div className="max-w-[760px]">
            <p className="msp-eyebrow">{hero.eyebrow}</p>
            <h1 className="msp-hero-title mt-3">{hero.title}</h1>
            <p className="msp-lead mt-5">{hero.subtitle}</p>
            <ul className="msp-list mt-4 grid gap-2">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} size="sm">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="sm" variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <h2 className="msp-section-title">{process.title}</h2>
          <p className="msp-body mt-2">{process.subtitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.steps.map((step) => (
              <article key={step.label} className="rounded-[12px] border border-gray-100 bg-white px-5 py-6 shadow-msp-card md:px-6 md:py-7">
                <p className="text-[36px] font-bold tracking-[-0.02em] text-[#c2d4f6]">{step.label}</p>
                <h3 className="mt-3 text-[24px] font-bold tracking-[-0.02em] text-msp-ink">{step.title}</h3>
                <p className="msp-body mt-3">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="assessment-form" className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 md:grid-cols-[1fr_360px]">
            <Card className="p-6">
              <div className="mb-6 max-w-[760px]">
                <p className="msp-eyebrow">{form.eyebrow}</p>
                <h2 className="msp-subsection-title mt-2">{form.title}</h2>
                <p className="msp-body mt-3">{form.subtitle}</p>
              </div>
              <form className="grid gap-4" aria-label={form.title}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="contact-name">{form.fields.name}</Label>
                    <Input id="contact-name" name="name" className="mt-2 h-[40px]" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">{form.fields.email}</Label>
                    <Input id="contact-email" name="email" type="email" className="mt-2 h-[40px]" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="contact-company">{form.fields.company}</Label>
                    <Input id="contact-company" name="company" className="mt-2 h-[40px]" />
                  </div>
                  <div>
                    <Label htmlFor="contact-industry">{form.fields.industry}</Label>
                    <Input
                      id="contact-industry"
                      name="industry"
                      placeholder={form.industryPlaceholder}
                      className="mt-2 h-[40px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-users">{form.fields.users}</Label>
                    <Select id="contact-users" name="users" className="mt-2 h-[40px]">
                      {form.usersOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-phone">{form.fields.phone}</Label>
                  <Input id="contact-phone" name="phone" className="mt-2 h-[40px]" />
                </div>

                <div>
                  <Label htmlFor="contact-setup">{form.fields.setup}</Label>
                  <textarea
                    id="contact-setup"
                    name="setup"
                    className="mt-2 min-h-[84px] w-full rounded-md border border-gray-100 bg-white px-4 py-2 text-[13px] text-msp-ink outline-none focus:border-msp-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-goal">{form.fields.goal}</Label>
                  <Input id="contact-goal" name="goal" className="mt-2 h-[40px]" />
                </div>

                <label className="inline-flex items-center gap-2 text-[14px] leading-relaxed text-msp-muted">
                  <Checkbox name="consent" />
                  {form.consentLabel}
                </label>

                <div>
                  <Button type="submit" size="sm">
                    {form.submitLabel}
                  </Button>
                </div>
                <p className="text-[14px] leading-relaxed text-msp-muted">{form.privacyNote}</p>
              </form>
            </Card>

            <Card className="p-6">
              <p className="msp-eyebrow">{trustPanel.eyebrow}</p>
              <h3 className="msp-subsection-title mt-2">{trustPanel.title}</h3>
              <p className="msp-body mt-4">{trustPanel.intro}</p>
              <ul className="msp-list mt-5 grid gap-2.5">
                {trustPanel.bullets.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[10px] border border-gray-100 bg-[#f8f9fb] p-4">
                <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{trustPanel.reassuranceTitle}</p>
                <p className="msp-list mt-3">{trustPanel.reassuranceBody}</p>
              </div>
              <p className="mt-5 text-[13px] font-semibold text-msp-ink">{trustPanel.closing}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-5 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <p className="msp-eyebrow">DIRECT CONTACT</p>
              <h2 className="msp-section-title mt-2">{direct.title}</h2>
              <p className="msp-body mt-3 max-w-[520px]">{direct.subtitle}</p>
            </div>
            <div className="rounded-[10px] border border-gray-100 bg-[#f8f9fb] p-4 text-[14px] text-msp-ink">
              <p className="font-semibold">{direct.name}</p>
              <p className="mt-2 text-msp-blue">{direct.email}</p>
              <p className="mt-1 text-msp-blue">{direct.phone}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-msp-muted">{direct.region}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{direct.reassurance}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="rounded-[12px] border border-[#e6edf3] bg-[#fbfcfd] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
            <p className="msp-eyebrow">EXPLORE FIRST</p>
            <h2 className="msp-subsection-title mt-2">{closingCta.title}</h2>
            <p className="msp-body mt-2 max-w-[560px]">{closingCta.subtitle}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={closingCta.primaryHref} size="sm" variant="secondary">
                {closingCta.primaryLabel}
              </Button>
              <Button href={closingCta.secondaryHref} size="sm">
                {closingCta.secondaryLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
