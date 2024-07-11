'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/SimpleNavbar';
import GlobalStyle from '../src/styles/GlobalStyle';
import { theme } from '../src/styles/theme';
import '../src/styles/globals.css';
import { Amplify } from 'aws-amplify';
import awsConfig from '../src/aws-exports';
import SimpleNavbar from '@/components/SimpleNavbar';

Amplify.configure(awsConfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SimpleNavbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
