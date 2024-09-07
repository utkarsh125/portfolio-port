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
        className={`xs:mx-20 sm:mx-32 md:mx-52 lg:mx-52 xl:mx-72 font-inter bg-custom-gradient`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
