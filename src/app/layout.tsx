import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { montserrat } from "./fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CineEagle – FPV & Drohnenaufnahmen | Fabian Lessmann",
  description:
    "CineEagle bietet professionelle FPV- und Drohnenaufnahmen für Imagefilme, Werbung, Events und dynamische Verfolgungsszenen. Geführt von FPV-Pilot Fabian Lessmann aus Hilden.",
  keywords: [
    "CineEagle",
    "FPV Drohne",
    "Drohnenaufnahmen",
    "Luftaufnahmen",
    "FPV Pilot",
    "Drohnenvideos",
    "Eventfilme",
    "Werbefilm",
    "Cinematic FPV",
    "Hilden Drohne",
    "Luftbildfotografie",
    "Fabian Lessmann",
  ],
  authors: [
    {
      name: "Fabian Lessmann",
    },
  ],
  creator: "Fabian Lessmann",
  publisher: "CineEagle",
  applicationName: "CineEagle – FPV & Drohnenaufnahmen",
  openGraph: {
    title: "CineEagle – FPV & Drohnenaufnahmen | Fabian Lessmann",
    description:
      "Professionelle FPV- und Drohnenaufnahmen für Werbespots, Imagefilme und Events. Atemberaubende Luftaufnahmen mit High-Speed FPV-Technologie.",
    url: "https://www.cineeagle.com",
    siteName: "CineEagle",
    images: [
      {
        url: "https://www.cineeagle.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FPV Drohnenaufnahme von CineEagle",
      },
    ],
    type: "website",
    locale: "de_DE",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cineeagle.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "youtube-channel": "https://www.youtube.com/@CineEagle", // YouTube-Kanal verlinkt
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
