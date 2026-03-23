import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { StarsIcon, Sparkles } from "lucide-react";
import { CornerRightDown } from "lucide-react";

export default async function Hero() {
  const user = await currentUser();
  return (
    <section className="app-shell grain-overlay py-12">
      <div className="soft-panel mb-8 w-fit rounded-full px-4 py-2">
        <a
          className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition hover:text-foreground"
          href="https://github.com/r2hu1/mysocials"
        >
          <StarsIcon className="h-3.5 w-3.5 text-primary" />
          <p className="flex items-center justify-center gap-1">
            Contribute to this project on GitHub
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </p>
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/75 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            One profile. Every platform.
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Turn all your social profiles into a single, elegant page.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Omilink helps creators, developers, and brands publish one clean
            link that brings every audience touchpoint together.
          </p>
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Button asChild className="rounded-full px-6">
              <Link
                href={!user ? "/sign-in" : "/dashboard/manage"}
                className="gap-2"
              >
                Get Started
                <CornerRightDown className="!h-4 !w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-5">
              <Link
                href="https://mysocialz.vercel.app/r2hu1"
                className="flex items-center gap-1"
              >
                View demo <ArrowRight className="h-4 w-4 -rotate-45" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="soft-panel rounded-3xl p-3 sm:p-4">
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <img className="w-full" src="/assets/homepage-dark.png" alt="Preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
