import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../public/data.json";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: data.name,
          description: data.about,
          images: [
            {
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "Avneesh",
            gender: "Male",
            lastName: "Agarwal",
            username: "avneesh0612",
          },
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
        keywords="Avneesh, Agarwal, Avneesh Agarwal, Blog, web developer,"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
