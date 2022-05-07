import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/homeComponent/Banner';
import BigOffers from '../components/homeComponent/BigOffers';
import ElectronicsProducts from '../components/homeComponent/ElectronicsProducts';
import FashionProducts from '../components/homeComponent/FashionProducts';
import Products from '../components/homeComponent/Products';
import TopCatagories from '../components/homeComponent/TopCatagories';
import offer2 from '../public/images/offer2.jpg';
import offer3 from '../public/images/offer3.jpg';
import '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-20">
        <Banner />
        <TopCatagories />
        <BigOffers />
        <Products />
        <div style={{ position: 'relative', height: '280px', width: '100%' }}>
          <Image
            className="w-fit h-fit"
            src={offer2}
            alt="offer"
            layout="fill"
          />
        </div>
        <FashionProducts />
        <div style={{ position: 'relative', height: '280px', width: '100%' }}>
          <Image
            className="w-fit h-fit"
            src={offer3}
            alt="offer"
            layout="fill"
          />
        </div>
        <ElectronicsProducts />
      </div>
    </div>
  );
};

export default Home;
