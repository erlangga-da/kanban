import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const plusJakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta",
  weight: "200 300 400 500 600 700 800",
});

export const metadata: Metadata = {
  title: "Kanban",
  description: "task management created by erlangga-da",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <div className="flex font-[family-name:var(--font-plus-jakarta)]">
          <Sidebar
            Links={[
              { label: "Platform Launch", active: false },
              { label: "Marketing Plan", active: false },
              { label: "Roadmap", active: false },
            ]}
          />
          <div className="w-screen overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
