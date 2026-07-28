import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaSify UI - Admin Dashboard",
  description: "Plantilla de Dashboard lista para producción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          {/* El contenido principal se desplaza a la derecha en escritorio */}
          <div className="flex-1 lg:pl-64">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}