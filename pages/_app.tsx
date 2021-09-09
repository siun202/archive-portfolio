import { AppProps } from "next/app";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Avneesh Agarwal"
        description="This is Avneesh's portfolio"
        canonical="https://avneesh.vercel.app/"
        openGraph={{
          url: "https://avneesh.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [],
          site_name: "Avneesh",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
