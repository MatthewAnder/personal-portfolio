import type { Metadata } from "next";
// Custom Fonts
import { fonts } from "./fonts";
// Chakra Provider Component
import { Providers } from "@/app/providers";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
