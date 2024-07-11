'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import Footer from '@/components/Footer';
import { theme } from '../src/styles/theme';
import { Amplify } from 'aws-amplify';
import awsConfig from '../src/aws-exports';
import SimpleNavbar from '@/components/SimpleNavbar';
import GlobalStyle from '../src/styles/GlobalStyle';

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
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .navbar-background {
                background-color: #718c88;
              }
              .hero-section {
                background: linear-gradient(
                  180deg,
                  rgba(113, 140, 136, 1) 0%,
                  rgba(94, 120, 117, 1) 100%
                );
                padding: 60px 0;
                color: white; 
              }
            `,
          }}
        />
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
