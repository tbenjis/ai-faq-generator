import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAQ Generator - AI-Powered FAQ Creation",
  description:
    "Transform your product descriptions into comprehensive FAQ sections using AI technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark min-h-screen flex flex-col`}>
        <AuthProvider>
          <Header />
          <div className="flex-grow pt-16">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
