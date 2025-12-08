import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import MinWidthGuard from "../components/MinWidthGuard";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Synthesis",
  description: "A playful collection of moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
      >
        <MinWidthGuard>{children}</MinWidthGuard>
      </body>
    </html>
  );
}
