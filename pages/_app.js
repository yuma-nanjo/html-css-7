import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
