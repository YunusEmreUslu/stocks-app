import Header from "@/components/Header";
import "../globals.css";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/sign-in");

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  };

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-gray-400">
        <Header user={user} />
        <main>
          <div className="container py-10">
            {children}
            <Toaster />
          </div>
        </main>
      </body>
    </html>
  );
};
export default Layout;
