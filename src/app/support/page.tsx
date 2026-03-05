import { Container } from "@/components/Container";
import { InfoTile } from "@/components/InfoTile";
import { PageHero } from "@/components/PageHero";
import {
  DemoWindowIcon,
  GearIcon,
  MailIcon,
  PhoneIcon,
  SupportTicketIcon,
} from "@/components/icons";
import { supportContent } from "@/content/support";

export default function SupportPage() {
  const { title, tiles, phone, email } = supportContent;

  return (
    <>
      <PageHero title={title} tone="flat" size="md" />

      <section className="bg-[#f4f5f7] py-20">
        <Container size="content">
          <div className="grid gap-5 md:grid-cols-3">
            <InfoTile
              title={tiles[0].title}
              description={tiles[0].description}
              icon={<SupportTicketIcon className="h-8 w-8" />}
            />
            <InfoTile
              title={tiles[1].title}
              description={tiles[1].description}
              icon={<DemoWindowIcon className="h-8 w-8" />}
            />
            <InfoTile title={tiles[2].title} description={tiles[2].description} icon={<GearIcon className="h-8 w-8" />} />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-[2fr_1fr]">
            <article className="rounded-[4px] border border-msp-border bg-white p-6">
              <div className="flex gap-3">
                <PhoneIcon className="h-8 w-8 text-msp-blue" />
                <div className="w-full">
                  <h2 className="text-[16px] font-bold text-msp-blue">{phone.title}</h2>
                  <div className="mt-3 grid gap-4 text-[13px] text-msp-ink sm:grid-cols-2">
                    <div className="space-y-1.5">
                      {phone.left.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {phone.right.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                      <p className="pt-1 font-bold">{phone.tollFree}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-[4px] border border-msp-border bg-white p-6">
              <div className="flex gap-3">
                <MailIcon className="h-8 w-8 text-msp-blue" />
                <div>
                  <h2 className="text-[16px] font-bold text-msp-blue">{email.title}</h2>
                  <a
                    href={`mailto:${email.address}`}
                    className="mt-3 inline-block text-[13px] text-msp-blue hover:underline"
                  >
                    {email.address}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
