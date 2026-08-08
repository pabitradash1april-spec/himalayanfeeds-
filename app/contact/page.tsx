import PageShell, { PageHeader } from "@/components/PageShell";
import ContactBlock from "@/components/ContactBlock";

export const metadata = { title: "Contact — Himalayan Feeds" };

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="We're here to help"
        sub="Questions about a product, an order, or becoming a dealer? Reach out any way you like."
      />
      <ContactBlock />
    </PageShell>
  );
}
