import PageShell, { PageHeader } from "@/components/PageShell";
import ProductGrid from "@/components/ProductGrid";
import { DealershipBand } from "@/components/Sections";

export const metadata = { title: "Products — Himalayan Feeds" };

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Products"
        title="Feed for poultry, fish, shrimp & cattle"
        sub="Four scientifically formulated ranges, one trusted brand. Explore the lineup below."
      />
      <ProductGrid aboveFold />
      <DealershipBand />
    </PageShell>
  );
}
