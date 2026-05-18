import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Om Morendha",
    template: "%s — Om Morendha",
  },
  description: "Software engineer. Writing about code, systems, and ideas.",
  metadataBase: new URL("https://omkmorendha.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omkmorendha.com",
    siteName: "Om Morendha",
  },
  twitter: {
    card: "summary",
    creator: "@omkmorendha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
