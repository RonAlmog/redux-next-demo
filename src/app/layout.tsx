import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/store-provider";
import TopNav from "@/components/top-nav";
import { Toaster } from "@/components/ui/sonner";

import UserMenu from "@/components/user-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Toaster />
            <TopNav />

            <div className="flex w-20 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <UserMenu />
            </div>
          </header>
          <div className="flex min-h-screen max-w-[1500px] mx-auto flex-col">
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
