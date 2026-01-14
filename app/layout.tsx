import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Copy Starter Pack",
  description: "Generate marketing copy for small businesses and e-commerce sellers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
