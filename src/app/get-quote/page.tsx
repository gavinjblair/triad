import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Checkbox, Input, Label, Radio, Select } from "@/components/FormControls";
import { UserAvatarIcon } from "@/components/icons";
import { getQuoteContent } from "@/content/getQuote";

export default function GetQuotePage() {
  const { title, quote, form } = getQuoteContent;

  return (
    <section className="msp-hero py-14 md:py-16">
      <Container size="content">
        <div className="grid gap-10 lg:grid-cols-[1fr_660px]">
          <div className="relative px-2 pt-5">
            <div className="text-[120px] leading-none text-white/85">&ldquo;</div>
            <p className="-mt-5 max-w-[470px] text-[25px] font-bold leading-[1.3] tracking-[-0.02em] text-msp-ink">
              {quote.body.split("their prices are affordable,")[0]}
              <span className="text-msp-blue">their prices are affordable, their support desk is very friendly and respects the contracted SLAs, which gives us confidence and assurance </span>
              that they will be there when needed.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <div className="h-[66px] w-[66px] overflow-hidden rounded-full border border-[#9fb9d8] bg-[#d8e5f3]">
                <div className="flex h-full items-center justify-center text-[#1b4f87]">
                  <UserAvatarIcon className="h-8 w-8" />
                </div>
              </div>
              <div>
                <div className="text-[14px] font-bold text-msp-ink">{quote.author}</div>
                <div className="text-[12px] text-msp-ink">{quote.role}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] border border-[#d7dbe2] bg-[#eef2f6] p-7 pt-8 shadow-msp-card">
            <div className="mx-auto -mt-[54px] w-fit rounded-full border border-[#d5d9df] bg-[#f7f7f8] px-8 py-2.5 text-[14px] text-msp-ink">
              {title}
            </div>

            <form className="mt-6 space-y-4" aria-label="Get quote form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">
                    Name <span className="text-msp-red">*</span>
                  </Label>
                  <Input id="name" className="mt-2 h-[38px]" />
                </div>
                <div>
                  <Label htmlFor="email">
                    Business Email <span className="text-msp-red">*</span>
                  </Label>
                  <Input id="email" type="email" className="mt-2 h-[38px]" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">
                    Phone <span className="text-msp-red">*</span>
                  </Label>
                  <div className="mt-2 flex gap-2">
                    <Select id="phone-code" className="h-[38px] w-[86px]">
                      <option>-Selec</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                    </Select>
                    <Input id="phone" className="h-[38px]" />
                  </div>
                </div>

                <div className="pt-[25px]">
                  <div className="grid grid-cols-2 gap-y-4 text-[13px] text-msp-ink">
                    {form.modules.map((item) => (
                      <label key={item} className="inline-flex items-center gap-2">
                        <Checkbox />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>
                    Pricing<span className="text-msp-red">*</span>
                  </Label>
                  <div className="mt-3 flex items-center gap-5 text-[13px] text-msp-ink">
                    {form.pricing.map((item, index) => (
                      <label key={item} className="inline-flex items-center gap-2">
                        <Radio defaultChecked={index === 0} name="pricing" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">
                    Location <span className="text-msp-red">*</span>
                  </Label>
                  <Select id="country" className="mt-2 h-[38px]">
                    {form.countries.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </Select>
                  <Select id="region" className="mt-2 h-[38px]">
                    <option>-Select Region-</option>
                    <option>England</option>
                    <option>Scotland</option>
                    <option>Wales</option>
                  </Select>
                </div>
              </div>

              <label className="inline-flex items-start gap-2 text-[12px] leading-5 text-msp-muted">
                <Checkbox className="mt-1" />
                <span>
                  Yes, I would like to receive marketing communication regarding Zoho&apos;s products,
                  services, and events from Zoho and its regional partners.
                </span>
              </label>

              <p className="text-[12px] text-msp-ink">
                By clicking &apos;Get quote&apos;, you agree to processing of personal data according to the{" "}
                <a href="#" className="text-msp-blue hover:underline">
                  Privacy Policy
                </a>
                .
              </p>

              <div className="pt-1 text-center">
                <Button type="submit" className="h-[38px] min-w-[220px] rounded-[6px] text-[15px]">
                  {form.cta}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
