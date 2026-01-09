import type { Metadata } from "next";
import type * as React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jett Visa",
    template: "%s | Jett Visa",
  },
  description: "Modern visa application and management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

