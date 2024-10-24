
//page.tsx

import Head from 'next/head';
import Header from '@/components/Header'; 
import About from '@/components/About';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page of the Next.js app" />
      </Head>

      <Header />
      <main>
        <About />
      </main>
    </>
  );
};

export default Home;
