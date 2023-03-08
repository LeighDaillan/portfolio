import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-900 text-white ">
        <Main />
        <NextScript />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3B6PEJ2JBR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3B6PEJ2JBR');
        `}
        </Script>
      </body>
    </Html>
  );
}
