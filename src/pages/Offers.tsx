
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Offers from '../components/Offers';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { Clock } from 'lucide-react';

const additionalOffers = [
  {
    id: 4,
    title: 'DJ + Sound System Package',
    vendor: 'Sound Waves Entertainment',
    vendorId: 6,
    originalPrice: 120000,
    discountPrice: 90000,
    timeLeft: '3 days left',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Floral Decoration Bundle',
    vendor: 'Bloom & Blossom',
    vendorId: 7,
    originalPrice: 200000,
    discountPrice: 160000,
    timeLeft: '4 days left',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Honeymoon Package',
    vendor: 'Paradise Travels',
    vendorId: 8,
    originalPrice: 450000,
    discountPrice: 350000,
    timeLeft: '1 week left',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop'
  }
];

const OffersPage = () => {
  const breadcrumbItems = [
    { label: 'Special Offers' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Exclusive Wedding Treasures
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover handpicked deals from our beloved vendor partners. These special offers are our way of 
            helping you create unforgettable moments without stretching your budget.
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-400">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Limited time treasures - don't let them slip away!</span>
          </div>
        </div>
      </section>

      <Offers />

      {/* Additional Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Beautiful Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover even more ways to bring your wedding dreams to life while keeping your budget happy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Special Deal
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{offer.timeLeft}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#917f4f] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{offer.vendor}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-[#917f4f]">
                        LKR {offer.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-500 line-through ml-2">
                        LKR {offer.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-green-600 font-semibold">
                      {Math.round((1 - offer.discountPrice / offer.originalPrice) * 100)}% OFF
                    </div>
                  </div>

                  <button className="w-full bg-[#917f4f] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-colors">
                    Claim This Treasure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OffersPage;
