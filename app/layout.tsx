import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { MyAnalytics } from "./components/analytics";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "edopalomino.com",
    template: "%s | edopalomino.com",
  },
  description: "Desarrollador de react native, web, artista digital y alquimista de galletas.",
  openGraph: {
    title: "edopalomino.com",
    description:
      "Desarrollador de react native, web, artista digital y alquimista de galletas.",
    url: "https://edopalomino.com",
    siteName: "edopalomino.com",
    images: [
      {
        url: "https://edopalomino.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "es-MX",
    type: "website",
  },
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
    title: "edopalomino",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <MyAnalytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
