import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contelli - AI-Powered Content Intelligence by Tezzeract',
  description: 'Transform your digital strategy with unified analytics, AI-powered content generation, and seamless planning—all in one intelligent platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
