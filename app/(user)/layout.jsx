import Logo from "@/components/Logo";
import Header from "./_components/Header";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <div className="app-shell mb-10 mt-16 grid place-content-center text-center">
        <Logo />
        <p className="mt-2 text-xs text-muted-foreground">
          An open source project by{" "}
          <a
            href="https://github.com/r2hu1"
            className="font-medium text-foreground underline decoration-primary/40 underline-offset-4"
          >
            r2hu1
          </a>
        </p>
      </div>
    </main>
  );
}