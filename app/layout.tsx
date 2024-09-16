import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/sections/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Pathway to productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="relative">
        <head>
          <link rel="icon" href="@/assets/logosaas.png" />
        </head>
        <body className={cn(dmSans.className, "antialiased bg-blue")}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
