import "./globals.css";

import { Playfair_Display, Poppins } from "next/font/google";

import Image from "next/image";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "utkarsh :/",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen font-sans bg-custom-gradient">
        
        <main className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {children}
        </main>

        <div className="hidden lg:block fixed bottom-0 right-0 z-50">
          <Image
            src="/gundam.png"
            alt="Gundam"
            width={400}
            height={400}
          />
        </div>
      </body>
    </html>
  );
}
