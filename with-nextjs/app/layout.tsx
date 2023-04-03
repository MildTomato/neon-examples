import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js + Neon",
  description: "Next.js example app and Neon as the Postgres database",
};

type RouteLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RouteLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
