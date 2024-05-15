import type { Metadata } from "next";
// Chakra Provider Component
import { Providers } from "@/app/providers";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Providers>
          <Navbar />
          <Socials />
          {children}
        </Providers>
      </body>
    </html>
  );
}
