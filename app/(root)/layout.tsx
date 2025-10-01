import Header from "@/components/Header";
import "../globals.css";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-400">
        <Header />
        <main>
          <div className="container py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
