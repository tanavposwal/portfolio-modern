import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";
import { PostHogProvider } from "./components/PostHogProvider";

export const metadata: Metadata = {
  title: {
    default: "Tanav Poswal",
    template: "Tanav Poswal • %s",
  },
  description: "Developer, problem solver and creator.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tanav Poswal",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          "min-screen antialiased max-w-xl mx-auto " + GeistSans.className
        }>
        <PostHogProvider>
          <NextTopLoader showSpinner={false} color="#242423" />
          <Navbar />
          <main className="flex-1 flex flex-col px-4 mt-14 mb-14">
            {children}
          </main>
        </PostHogProvider>
      </body>
    </html>
  );
}
