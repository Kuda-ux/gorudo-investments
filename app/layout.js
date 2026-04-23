import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["SOFT"],
});

export const metadata = {
  metadataBase: new URL("https://gorudoinvestments.co.zw"),
  title: {
    default:
      "Gorudo Investments | Premium Agribusiness & Supply Solutions in Zimbabwe",
    template: "%s | Gorudo Investments",
  },
  description:
    "Gorudo Investments is a Zimbabwean agribusiness and diversified supply company delivering fresh farm produce, greenhouse-grown excellence, poultry & piggery outputs, and reliable procurement solutions across Harare and Marondera.",
  keywords: [
    "Gorudo Investments",
    "Zimbabwe agribusiness",
    "fresh farm produce Zimbabwe",
    "greenhouse produce",
    "poultry and piggery",
    "Shashi Maputi",
    "Shashi Ice",
    "supply of goods and services Zimbabwe",
    "Harare",
    "Marondera",
    "government procurement Zimbabwe",
  ],
  authors: [{ name: "Gorudo Investments" }],
  openGraph: {
    type: "website",
    url: "https://gorudoinvestments.co.zw",
    title: "Gorudo Investments — Trusted Zimbabwean Supply & Agribusiness",
    description:
      "Fresh produce, greenhouse excellence, poultry & piggery, and dependable supply solutions from Harare and Marondera.",
    siteName: "Gorudo Investments",
    images: [{ url: "/logo.jpeg", width: 1200, height: 630 }],
    locale: "en_ZW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorudo Investments",
    description:
      "Premium Zimbabwean agribusiness and diversified supply company.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export const viewport = {
  themeColor: "#1f6236",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <Reveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
