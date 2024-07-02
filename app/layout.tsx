'use client';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyle from '../src/styles/GlobalStyle';
import { theme } from '../src/styles/theme';
import '../src/styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsConfig from '../src/aws-exports';

Amplify.configure(awsConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
