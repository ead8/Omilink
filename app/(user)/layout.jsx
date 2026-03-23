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
          Omilink — fork of{" "}
          <a
            href="https://github.com/r2hu1/MySocials"
            className="font-medium text-foreground underline decoration-primary/40 underline-offset-4"
          >
            MySocials
          </a>
        </p>
      </div>
    </main>
  );
}