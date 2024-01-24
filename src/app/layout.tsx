import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import Layout from "@/components/layout/layout";
const ZenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

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
    
      <body className={ZenMaruGothic.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
