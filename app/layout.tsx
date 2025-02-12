import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Sections/Header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Character Counter",
  description:
    "This projects counter the character, word and sentences on your input.",
  keywords: ["counter", "character", "analyze character"],
  creator: "Vipul Jain",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#eff1f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`bg-black ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
