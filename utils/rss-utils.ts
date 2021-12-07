import { Feed } from "feed";
import fs from "fs";

export default function generateRSSFeed() {
  const baseUrl = "https://www.avneesh.tech/";

  const feed = new Feed({
    title: "Avneesh Agarwal",
    description:
      "I am a fullstack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: "https://www.avneesh.tech/og-image.png",
    favicon: `${baseUrl}/logo.svg`,
    feedLinks: { rss2: `${baseUrl}/rss.xml` },
    author: {
      name: "Avneesh Agarwal",
      email: "avneeshagarwal0612@gmail.com",
      link: "https://twitter.com/avneesh0612",
    },
    copyright: "All rights reserved, Avneesh Agarwal",
  });

  feed.addCategory("Technology");
  feed.addCategory("Programming");
  feed.addCategory("Web Development");
  feed.addCategory("JavaScript");
  feed.addCategory("Blogger");
  feed.addCategory("Avneesh Agarwal");

  fs.writeFileSync("public/rss.xml", feed.rss2());
}
