import Link from "next/link";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Logo from "./Logo";
import { CornerRightDown } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="app-shell pt-5">
      <div className="soft-panel rounded-2xl px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-4">
        <Logo />
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full px-4">
              <Link
                href={!user ? "/sign-in" : "/dashboard/manage"}
                className="gap-2"
              >
                {!user ? "Get Started" : "Dashboard"}
                <CornerRightDown className="!h-4 !w-4" />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
