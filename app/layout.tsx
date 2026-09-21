import type { Metadata } from "next";
import { assetPath } from "../lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Thakare | Electrical & Electronics Engineer",
  description: "Portfolio of Kartik Thakare—embedded firmware engineer and RIT graduate student focused on RTL, ASIC verification, computer architecture, FPGA systems, and physical design.",
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
