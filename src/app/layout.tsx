import "./globals.css";

// import { CrosshairCursor } from "./components/CrosshairCursor";
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
        className={`sm:mx-32 md:mx-52 lg:mx-52 xl:mx-72 font-inter`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
