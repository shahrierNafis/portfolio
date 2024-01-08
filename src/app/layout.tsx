import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const StarJHol = localFont({
  src: "./StarJHol.ttf",

  variable: "--font-StarJHol",
});

export const metadata: Metadata = {
  title: "Shahrier Nafis",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scrollbar-track-white scrollbar-thumb-black scrollbar-thin snap-y snap-proximity"
    >
      <head>
        <meta name="darkreader-lock" />
      </head>

      <body
        className={`w-vw overflow-x-hidden${inter.className} ${StarJHol.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
