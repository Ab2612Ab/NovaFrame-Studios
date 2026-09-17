import "./globals.css";
import "./upgrade.css";
import "./hero-background.css";
import Script from "next/script";
import InteractiveFX from "../components/InteractiveFX";

export const metadata = {
  title: "NovaFrame Studios — Animation & Motion Design",
  description: "NovaFrame Studios creates cinematic animation, motion design and digital stories that make brands impossible to ignore.",
  keywords: ["animation studio", "motion design", "3D animation", "2D animation", "brand animation"],
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NovaFrame Studios — Animation & Motion Design",
    description: "Transforming Ideas Into Living Stories.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NovaFrame Studios — Animation & Motion Design",
    description: "Transforming Ideas Into Living Stories.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08070b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <InteractiveFX />
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
