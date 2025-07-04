
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedAlbums from '../components/FeaturedAlbums';
import BridesCornerPreview from '../components/BridesCornerPreview';
import Offers from '../components/Offers';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Categories />
        <FeaturedAlbums />
        <BridesCornerPreview />
        <Offers />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
