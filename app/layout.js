import './globals.css';
import { Playfair } from 'next/font/google';

const fair = Playfair({ subsets: ['latin'] });

export const metadata = {
  title: 'CI/CD tesing',
  description: 'Generating static page with github actions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fair.className}>{children}</body>
    </html>
  );
}
