import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { constructMetadata } from '@/lib/utils';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Wotfard', sans-serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
