import Link from "next/link";

export default function LinkCard({ title, href, icon, className }) {
  return (
    href && (
      <Link
        href={href}
        target="_blank"
        className={`group relative mx-auto flex h-14 w-full items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 md:w-[440px] ${className}`}
      >
        <div className="absolute left-5 text-primary/85 transition group-hover:text-primary">{icon}</div>
        {title}
      </Link>
    )
  );
}
