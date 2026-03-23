import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs/server";
import ManageForm from "../../_components/ManageForm";
import Link from "next/link";
import UserPageLink from "../../_components/UserPageLink";

export async function generateMetadata({ params }) {
  return {
    title: "Manage",
  };
}

export default async function Page() {
  const { imageUrl, firstName } = await currentUser();
  return (
    <div className="app-shell pt-6">
      <UserPageLink />
      <div className="soft-panel mb-16 mt-5 rounded-3xl p-5 sm:p-8">
        <div className="grid gap-8">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <img
              className="h-20 w-20 rounded-full border border-border/70"
              src={imageUrl}
              alt={firstName}
            />
            <Label>Profile Image</Label>
            <p className="text-xs text-muted-foreground">
              to change profile picture{" "}
              <Link
                href="/user-profile/profile"
                className="text-primary underline decoration-primary/40 underline-offset-4"
              >
                click here
              </Link>
              <span className="text-destructive">*</span>
            </p>
          </div>
          <ManageForm />
        </div>
      </div>
    </div>
  );
}
