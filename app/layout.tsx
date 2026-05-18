import type { Metadata } from "next";
import "./globals.css";
import WindowChrome from "@/components/WindowChrome";
import NavStrip from "@/components/NavStrip";
import StatusLine from "@/components/StatusLine";

export const metadata: Metadata = {
  title: {
    default: "om@morendha — zsh",
    template: "%s — om@morendha",
  },
  description:
    "Om Morendha — AI engineer building agent infrastructure, MCP servers, and the data layer underneath.",
  metadataBase: new URL("https://omkmorendha.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omkmorendha.com",
    siteName: "om@morendha",
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
    <html lang="en">
      <body>
        <div className="app-shell">
          <WindowChrome>
            <NavStrip />
            <main className="term-body">{children}</main>
            <StatusLine />
          </WindowChrome>
        </div>
      </body>
    </html>
  );
}
