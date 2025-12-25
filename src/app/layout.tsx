import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Management System",
  description: "Modern student management application with AI-powered insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}