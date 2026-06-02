import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AccioTech | From Imagination to Innovation",
  description:
    "AccioTech is an educational technology company teaching kids and teenagers programming, robotics, STEM, and future technology skills. Launching in Egypt with a vision for regional expansion.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
