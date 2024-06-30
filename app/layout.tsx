'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../src/styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsConfig from '../src/aws-exports';

Amplify.configure(awsConfig);

console.log(awsConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
