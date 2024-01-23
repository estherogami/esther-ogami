import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Layout from "@/components/layout/layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Esther Ogami Portfolio',
    default: 'Home', // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
