import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Chatbot from "@/components/Chatbot";
import { COMPANY } from "@/lib/gorudoKnowledge";

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
      "Gorudo Investments (Private) Limited | Harvesting Prosperity — Zimbabwe",
    template: "%s | Gorudo Investments",
  },
  description:
    "Gorudo Investments (Private) Limited — Harvesting Prosperity. A Zimbabwean agribusiness and diversified supply company delivering fresh greenhouse produce, Shashi Maputi snacks, Shashi Ice cubes, poultry & piggery outputs, and reliable procurement across Harare and Marondera.",
  applicationName: "Gorudo Investments",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Gorudo Investments",
    "Gorudo Investments Zimbabwe",
    "gorudoinvestments.co.zw",
    "Zimbabwe agribusiness",
    "agribusiness Zimbabwe",
    "fresh farm produce Zimbabwe",
    "greenhouse produce Zimbabwe",
    "tomato suppliers Zimbabwe",
    "sweet pepper suppliers Zimbabwe",
    "Shashi Maputi",
    "Shashi Ice",
    "ice cubes Zimbabwe",
    "poultry suppliers Zimbabwe",
    "piggery Zimbabwe",
    "rabbit farming Zimbabwe",
    "supply of goods and services Zimbabwe",
    "government procurement Zimbabwe",
    "PRAZ supplier",
    "Harare",
    "Marondera",
    "Chihota",
  ],
  authors: [{ name: "Gorudo Investments", url: "https://gorudoinvestments.co.zw" }],
  creator: "Gorudo Investments (Private) Limited",
  publisher: "Gorudo Investments (Private) Limited",
  alternates: {
    canonical: "https://gorudoinvestments.co.zw",
  },
  openGraph: {
    type: "website",
    url: "https://gorudoinvestments.co.zw",
    title: "Gorudo Investments — Harvesting Prosperity, Zimbabwe",
    description:
      "Fresh greenhouse produce, Shashi Maputi, Shashi Ice, poultry & piggery and dependable supply & procurement from Harare and Marondera.",
    siteName: "Gorudo Investments",
    images: [
      { url: "/images/gorudo-1.jpeg", width: 1200, height: 630, alt: "Gorudo Investments greenhouse operations" },
      { url: "/logo.jpeg", width: 1024, height: 1024, alt: "Gorudo Investments logo" },
    ],
    locale: "en_ZW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorudo Investments — Harvesting Prosperity",
    description:
      "Premium Zimbabwean agribusiness, diversified supply & procurement.",
    images: ["/images/gorudo-1.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
    shortcut: "/logo.jpeg",
  },
  category: "Agribusiness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "ZW",
    "geo.placename": "Marondera, Zimbabwe",
    "geo.position": "-18.1860;31.5519",
    "ICBM": "-18.1860, 31.5519",
  },
};

export const viewport = {
  themeColor: "#1f6236",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gorudoinvestments.co.zw/#organization",
      name: COMPANY.legalName,
      alternateName: COMPANY.shortName,
      url: "https://gorudoinvestments.co.zw",
      logo: "https://gorudoinvestments.co.zw/logo.jpeg",
      slogan: COMPANY.tagline,
      description:
        "Diversified Zimbabwean agribusiness — fresh greenhouse produce, Shashi Maputi, Shashi Ice, poultry & piggery, and supply & procurement.",
      email: COMPANY.email,
      telephone: COMPANY.phone,
      foundingLocation: "Marondera, Zimbabwe",
      areaServed: "ZW",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 1 Mudakurwa, Chihota",
        addressLocality: "Marondera",
        addressRegion: "Mashonaland East",
        addressCountry: "ZW",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: COMPANY.phone,
          contactType: "customer support",
          areaServed: "ZW",
          availableLanguage: ["en", "sn"],
        },
        {
          "@type": "ContactPoint",
          telephone: COMPANY.whatsapp,
          contactType: "sales",
          contactOption: "WhatsApp",
          areaServed: "ZW",
          availableLanguage: ["en", "sn"],
        },
      ],
      sameAs: ["https://gorudoinvestments.co.zw"],
      department: COMPANY.divisions.map((d) => ({ "@type": "Organization", name: d })),
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gorudoinvestments.co.zw/#localbusiness",
      name: COMPANY.legalName,
      image: "https://gorudoinvestments.co.zw/images/gorudo-1.jpeg",
      telephone: COMPANY.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 1 Mudakurwa, Chihota",
        addressLocality: "Marondera",
        addressRegion: "Mashonaland East",
        addressCountry: "ZW",
      },
      geo: { "@type": "GeoCoordinates", latitude: -18.186, longitude: 31.5519 },
      url: "https://gorudoinvestments.co.zw",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://gorudoinvestments.co.zw/#website",
      url: "https://gorudoinvestments.co.zw",
      name: "Gorudo Investments",
      publisher: { "@id": "https://gorudoinvestments.co.zw/#organization" },
      inLanguage: "en-ZW",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Reveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
