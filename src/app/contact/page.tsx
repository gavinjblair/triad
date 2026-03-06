import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Checkbox, Input, Label, Select } from "@/components/FormControls";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  const { hero, process, form, trustPanel, direct, closingCta } = contactContent;

  return (
    <>
      <section className="bg-white py-20">
        <Container size="content">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">{hero.title}</h1>
            <p className="mt-5 text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
            <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
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
          <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{process.title}</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{process.subtitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.steps.map((step) => (
              <article key={step.label} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <p className="text-[36px] font-bold tracking-[-0.02em] text-[#c2d4f6]">{step.label}</p>
                <h3 className="mt-2 text-[24px] font-bold tracking-[-0.02em] text-msp-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="assessment-form" className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 md:grid-cols-[1fr_360px]">
            <Card className="p-6">
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

                <label className="inline-flex items-center gap-2 text-[12px] text-msp-muted">
                  <Checkbox name="consent" />
                  {form.consentLabel}
                </label>

                <div>
                  <Button type="submit" size="sm">
                    {form.submitLabel}
                  </Button>
                </div>
                <p className="text-[12px] text-msp-muted">{form.privacyNote}</p>
              </form>
            </Card>

            <Card className="p-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">WHY TRIAD IT</p>
              <h3 className="mt-2 text-[36px] font-bold tracking-[-0.02em] text-msp-ink">{trustPanel.title}</h3>
              <VisualPlaceholder
                tone="blue"
                variant="form"
                imageSrc="/images/illustrations/diagram-compliance-framework.webp"
                imageAlt="Compliance and governance framework"
                className="mt-4 h-[170px] rounded-[8px] border-gray-100"
              />
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {trustPanel.bullets.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] font-semibold text-msp-ink">{trustPanel.closing}</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-5 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">DIRECT CONTACT</p>
              <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{direct.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{direct.subtitle}</p>
            </div>
            <div className="rounded-[10px] border border-gray-100 bg-[#f8f9fb] p-4 text-[14px] text-msp-ink">
              <p className="font-semibold">{direct.name}</p>
              <p className="mt-2 text-msp-blue">{direct.email}</p>
              <p className="mt-1 text-msp-blue">{direct.phone}</p>
              <p className="mt-2 text-[13px] text-msp-muted">{direct.region}</p>
              <p className="mt-3 text-[12px] leading-relaxed text-msp-muted">{direct.reassurance}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card">
            <h2 className="text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{closingCta.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{closingCta.subtitle}</p>
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
