import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://connect2u.xyz"),

  title: {
    default: "Connect2U Data Solutions | SQL, Reporting & Automation",
    template: "%s | Connect2U Data Solutions",
  },

  description:
    "Practical SQL, database, reporting, data integration, data cleanup and automation solutions for businesses.",

  keywords: [
    "SQL consultant",
    "SQL development",
    "database consulting",
    "data cleanup",
    "data integration",
    "ETL",
    "reporting automation",
    "Excel automation",
    "Access database",
    "business data consulting",
  ],

  authors: [{ name: "Raymond Resurreccion" }],
  creator: "Raymond Resurreccion",

  openGraph: {
    title: "Connect2U Data Solutions",
    description:
      "Your business has the data. Let's turn it into answers.",
    url: "https://connect2u.xyz",
    siteName: "Connect2U Data Solutions",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}