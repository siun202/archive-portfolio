import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

interface IHomeProps {
  Posts: [PostType];
}

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || 'https://avneesh.tech';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'About',
      action: 'post',
    },
    {
      label: 'Past Works',
      action: 'post',
    },
    {
      label: 'Blog',
      action: 'link',
      target: 'https://blog.avneesh.tech',
    },
    {
      label: 'Socials',
      action: 'post',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/About.png`,
    aspectRatio: '1.91:1',
  },
  input: {
    text: 'enter...',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Mint an NFT',
  description: 'Mint an NFT',
  openGraph: {
    title: 'Mint an NFT',
    description: 'Mint an NFT',
    images: [`${NEXT_PUBLIC_URL}/default.png`],
  },
  other: {
    ...frameMetadata,
  },
};

const Home: FC<IHomeProps> = ({ Posts }) => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Blog Posts={Posts} />
      <Contact />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts(data.username);

  return {
    props: {
      Posts: Posts,
    },
    revalidate: 60 * 60 * 24,
  };
};
