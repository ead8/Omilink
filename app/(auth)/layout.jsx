import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoading } from "@clerk/nextjs";
export default function RootLayout({ children }) {
  return (
    <main className="fixed left-0 right-0 top-0 flex h-full w-full items-center justify-center px-6">
      <ClerkLoading>
        <Skeleton className="h-[264px] w-[500px] max-w-[300px] rounded-2xl" />
      </ClerkLoading>
      <div className="soft-panel rounded-3xl p-2 sm:p-4">{children}</div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_20%_20%,oklch(0.9_0.05_300),transparent_35%),radial-gradient(circle_at_80%_0%,oklch(0.88_0.04_250),transparent_30%),var(--background)]"></div>
    </main>
  );
}
