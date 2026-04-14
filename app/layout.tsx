import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Colton Martin | 2028 College Soccer Recruit from Kentucky | Outside Back, Centerback, Midfielder, Wingback",
  description:
    "Colton Martin is a 2028 college soccer recruit from Kentucky. Right Back for Lexington Sporting Club MLS Next U17. AP/Honors student with 4.0+ GPA.",
  openGraph: {
    title: "Colton Martin | 2028 College Soccer Recruit",
    description:
      "Right Back for Lexington Sporting Club MLS Next U17. AP/Honors student with 4.0+ GPA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
