import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    <html lang="en">
      <head>
        <Script
          src="https://use.typekit.net/uxs7dvz.js"
          strategy="beforeInteractive"
        />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
