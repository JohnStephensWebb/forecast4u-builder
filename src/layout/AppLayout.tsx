import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="content">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;