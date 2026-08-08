const MESSAGES = [
  "Now onboarding new dealers across India — attractive margins & full support",
  "FSSAI-certified manufacturing · Antibiotic-free formulations",
  "Poultry · Fish · Shrimp · Cattle — one trusted feed partner",
  "Call us on 099980 33962 for bulk & dealership enquiries",
];

export default function AnnouncementBar() {
  const line = MESSAGES.join("   •   ");
  return (
    <div className="gradient-orange text-white text-[13px] font-medium overflow-hidden">
      <div className="flex whitespace-nowrap py-2">
        <div className="animate-marquee flex shrink-0">
          <span className="px-4">{line}</span>
          <span className="px-4" aria-hidden>
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
