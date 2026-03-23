"use client";

import { ClerkLoading, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/ModeToggle";

export default function Header() {
  const router = useRouter();

  return (
    <header className="app-shell pt-5">
      <div className="soft-panel flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
        <Logo />
        <div className="flex items-center gap-2">
        <ClerkLoading>
            <Skeleton className="h-9 w-[84px] rounded-full" />
        </ClerkLoading>

        <SignOutButton
          signOutCallback={() => {
            router.push("/sign-in");
          }}
        >
            <Button size="sm" className="rounded-full px-4">
            Logout <LogOut className="ml-2 !h-4 !w-4" />{" "}
          </Button>
        </SignOutButton>

        <ModeToggle />
        </div>
      </div>
    </header>
  );
}
