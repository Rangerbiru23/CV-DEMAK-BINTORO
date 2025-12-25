import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV DEMAK BINTORO - Pupuk & Pemberantas Hama | Banyuwangi",
  description: "CV DEMAK BINTORO - Partner terpercaya untuk pupuk berkualitas dan pemberantas hama efektif di Banyuwangi. Tingkatkan hasil panen Anda dengan produk unggulan kami!",
  keywords: ["CV DEMAK BINTORO", "pupuk", "pemberantas hama", "pestisida", "pertanian", "Banyuwangi", "Jawa Timur", "pupuk organik", "pupuk anorganik", "NPK"],
  authors: [{ name: "CV DEMAK BINTORO" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV DEMAK BINTORO - Pupuk & Pemberantas Hama",
    description: "Partner terpercaya untuk pupuk berkualitas dan pemberantas hama efektif di Banyuwangi",
    url: "https://demakbintoro.com",
    siteName: "CV DEMAK BINTORO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV DEMAK BINTORO - Pupuk & Pemberantas Hama",
    description: "Partner terpercaya untuk pupuk berkualitas dan pemberantas hama efektif di Banyuwangi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="nw9b3gq5kgv8xp2l9j9v4btrw9nqwv" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
