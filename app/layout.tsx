import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Thakare | Electrical & Electronics Engineer",
  description: "Portfolio of Kartik Thakare—embedded firmware engineer and RIT graduate student focused on RTL, ASIC verification, computer architecture, FPGA systems, and physical design.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
