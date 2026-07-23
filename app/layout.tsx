import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diskfactory.github.io"),
  title: "DiskFactory | 디스크팩토리",
  description: "재미있는 아이디어를 손안의 게임으로 만드는 캐주얼 게임 스튜디오, DiskFactory.",
  openGraph: {
    title: "DiskFactory | Small Team, Big Fun",
    description: "가볍게 시작해 오래 즐길 수 있는 캐주얼 게임을 만듭니다.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "DiskFactory — Small Team, Big Fun" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DiskFactory | Small Team, Big Fun",
    description: "가볍게 시작해 오래 즐길 수 있는 캐주얼 게임을 만듭니다.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-primary selection:text-black`}
      >
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
