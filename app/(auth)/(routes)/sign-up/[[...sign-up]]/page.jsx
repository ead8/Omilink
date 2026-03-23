import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up",
  description: "Sign up for Omilink",
};

export default function Page() {
  return <SignUp />;
}
