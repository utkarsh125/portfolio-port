import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "utkarsh :/",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-inter bg-custom-gradient`}
      >
        {children}
      </body>
    </html>
  );
}
