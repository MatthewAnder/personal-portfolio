import "./globals.css";

// Chakra Provider Component
import { Providers } from "@/app/providers";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body>
        <AnimatedBackground />
        <Providers>
          <Navbar />
          <Socials />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
