import Header from "@/components/Header";
import "../globals.css";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-gray-400">
        <Header />
        <main>
          <div className="container py-10">{children}</div>
        </main>
      </body>
    </html>
  );
};
export default Layout;
