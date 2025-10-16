import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Strategic Utilities Solution - Expert Utilities Advisory and Project Management Services",
  description:
    "Strategic Utilities Solution understands the complex nature of risks associated with the utilities within the built environment space. We pride ourselves on working closely for our valued clients to facilitate integrated, sustainable solutions.",
  generator: "Kodominio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
