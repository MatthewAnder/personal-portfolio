import type { Metadata } from "next";
// Chakra Provider Component
import { Providers } from "@/app/providers";
import Navbar from "@/components/Navbar";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
