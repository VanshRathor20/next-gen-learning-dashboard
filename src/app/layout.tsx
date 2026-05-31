import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A futuristic education platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} antialiased`}
        style={{ backgroundColor: "#0a0a0f", color: "white" }}
      >
        <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
          <Sidebar />
          <main
            style={{ flex: 1, overflowY: "auto" }}
            className="pb-20 lg:pb-0"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
