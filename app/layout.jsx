import "./globals.css";

export const metadata = {
  title: "NovaFrame Studios — Animation & Motion Design",
  description: "NovaFrame Studios creates cinematic animation, motion design and digital stories that make brands impossible to ignore.",
  keywords: ["animation studio", "motion design", "3D animation", "2D animation", "brand animation"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "NovaFrame Studios — Animation & Motion Design",
    description: "Transforming Ideas Into Living Stories.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
