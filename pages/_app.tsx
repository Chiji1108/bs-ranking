import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ブロスタランキング</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          data-ad-client="ca-pub-4184670726358678"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
