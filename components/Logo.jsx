import { PartyPopper } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group select-none rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 transition hover:border-primary/40 hover:bg-card"
    >
      <span className="flex items-center gap-2">
        <span className="text-base font-semibold tracking-tight">MySocials</span>
        <PartyPopper className="h-4 w-4 text-primary transition group-hover:rotate-12" />
      </span>
    </Link>
  );
}
