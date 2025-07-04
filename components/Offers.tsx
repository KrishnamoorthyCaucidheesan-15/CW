
import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: '20% Off Wedding Photography',
    vendor: 'Capture Moments Studio',
    vendorId: 3,
    originalPrice: 150000,
    discountPrice: 120000,
    timeLeft: '2 days left',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Bridal Package Deal',
    vendor: 'Elegance Bridal Boutique',
    vendorId: 2,
    originalPrice: 80000,
    discountPrice: 60000,
    timeLeft: '5 days left',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Complete Venue + Catering',
    vendor: 'Paradise Gardens',
    vendorId: 1,
    originalPrice: 300000,
    discountPrice: 250000,
    timeLeft: '1 week left',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=200&fit=crop'
  }
];

const Offers = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Limited Time Offers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Exclusive deals from top-rated vendors. Save big on your dream wedding.
          </p>
          <Link 
            to="/offers" 
            className="inline-flex items-center text-[#917f4f] hover:text-[#d4c284] font-medium transition-colors"
          >
            View All Offers →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <Link to={`/vendor/${offer.vendorId}`} className="block">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Limited Time
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{offer.timeLeft}</span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link to={`/vendor/${offer.vendorId}`}>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#917f4f] transition-colors">
                    {offer.title}
                  </h3>
                </Link>
                <Link 
                  to={`/vendor/${offer.vendorId}`}
                  className="text-gray-600 hover:text-[#917f4f] transition-colors mb-4 block"
                >
                  {offer.vendor}
                </Link>

                <div className="flex items-center space-x-1 mb-4">
                  <Star className="h-4 w-4 text-[#917f4f] fill-current" />
                  <span className="font-medium">{offer.rating}</span>
                </div>

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

                <Link 
                  to={`/vendor/${offer.vendorId}`}
                  className="block w-full bg-[#917f4f] text-white py-3 rounded-xl font-semibold hover:bg-[#7a6a42] transition-colors text-center"
                >
                  Claim Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
