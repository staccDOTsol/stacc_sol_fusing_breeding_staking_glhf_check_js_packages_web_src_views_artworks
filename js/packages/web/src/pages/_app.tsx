import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>$STACC Solana Tactical RPG #NFTs</title>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}
