import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "./MainLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const youtubeSansSemibold = localFont({
  src: "./fonts/youtube-sans/YouTubeSansSemibold.otf",
  variable: "--font-youtube-sans-semibold",
});

export const metadata: Metadata = {
  title: "YouTube",
  description: "A YouTube UI clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/youtube-icon.svg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${youtubeSansSemibold.variable} antialiased`}
      >
        <MainLayout>
          {children} {/* Render the children here */}
        </MainLayout>
      </body>
    </html>
  );
}
