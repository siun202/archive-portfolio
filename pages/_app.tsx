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
          title: "Avneesh Agarwal",
          description: "Portfolio of Avneesh Agarwal",
          images: [
            {
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: "Avneesh",
            },
          ],
          site_name: "Avneesh",
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
