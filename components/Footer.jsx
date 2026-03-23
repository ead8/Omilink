import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="app-shell pb-12 pt-16 text-center">
      <p className="text-sm text-muted-foreground sm:text-base">
        Built by{" "}
        <a
          className="font-medium text-foreground underline decoration-primary/45 underline-offset-4"
          href="https://github.com/r2hu1"
        >
          r2hu1
        </a>
        . Source code available on{" "}
        <a
          className="font-medium text-foreground underline decoration-primary/45 underline-offset-4"
          href="https://github.com/r2hu1/MySocials"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
