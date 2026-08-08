import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function Logo() {
  return (
    <Link href="/" className="flex items-start gap-2">
      <span className="relative mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full gradient-leaf text-white">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M12 3c-4 3-6 6-6 10a6 6 0 0012 0c0-4-2-7-6-10z"
            fill="currentColor"
          />
          <path
            d="M12 8v9M9 12l3 2 3-2"
            stroke="var(--color-leaf-dark)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display font-700 text-[19px] tracking-tight text-ink">
          {BRAND.name}
          <span className="text-leaf-dark">.</span>
        </span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.24em] uppercase text-leaf-dark">
          {BRAND.tagline}
        </span>
      </span>
    </Link>
  );
}
