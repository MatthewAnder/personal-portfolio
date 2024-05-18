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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=hind@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
      </head>
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
