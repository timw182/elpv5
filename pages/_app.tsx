import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import Head from "next/head";
import Header from "./components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
