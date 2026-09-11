import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clear Day — Confidence for them. Reassurance for you.",
  description: "Simple daily support for staying organised, connected and independent — with peace of mind for everyone who cares.",
  icons: { icon: "/clear-day-favicon.svg" },
  openGraph: {
    title: "Clear Day",
    description: "Confidence for them. Reassurance for you.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Clear Day — Confidence for them. Reassurance for you." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
