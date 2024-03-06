import Navbar from "../_components/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header>
        <Navbar></Navbar>
      </header>

      {children}
    </section>
  );
}
