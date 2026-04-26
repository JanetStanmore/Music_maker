import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Music Lab',
  description: 'Personal AI-assisted music maker and downloader with Supabase'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
