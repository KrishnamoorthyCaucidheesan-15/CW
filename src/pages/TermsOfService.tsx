
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: 'Community Guidelines' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Community Guidelines</h1>
            <p className="text-gray-600 mb-8">Building a supportive space where every love story is celebrated. Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Welcome to Our Family</h2>
                <p className="text-gray-700 mb-4">
                  By joining WeddingDreams, you're becoming part of a loving community dedicated to celebrating every couple's unique journey. 
                  These guidelines help us maintain a space where all love stories are honored and respected. If these values don't align with yours, 
                  we kindly ask that you consider other platforms that might be a better fit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What We're All About</h2>
                <p className="text-gray-700 mb-4">
                  WeddingDreams is a heartfelt platform connecting couples with talented wedding professionals across Sri Lanka. 
                  We provide tools, inspiration, and a supportive community to help you plan the wedding that truly reflects your love story.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Creating Your Account</h2>
                <p className="text-gray-700 mb-4">
                  When you create an account with us, you're joining our family. We ask that you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Share authentic, accurate information about yourself</li>
                  <li>Keep your account secure and notify us immediately of any concerns</li>
                  <li>Take responsibility for all activity under your account</li>
                  <li>Treat your account as a reflection of the love and respect you want to see in our community</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Being Part of Our Community</h2>
                <p className="text-gray-700 mb-4">Our community thrives on love, support, and mutual respect. Please help us maintain this by not:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Using our platform for anything that goes against the law or hurts others</li>
                  <li>Sharing false, misleading, or hurtful content that could damage someone's special day</li>
                  <li>Engaging in harassment, discrimination, or behavior that makes others feel unwelcome</li>
                  <li>Attempting to access accounts or areas that aren't yours</li>
                  <li>Disrupting the peaceful, supportive environment we've all created together</li>
                  <li>Violating local laws or community standards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Working with Wedding Professionals</h2>
                <p className="text-gray-700 mb-4">
                  WeddingDreams serves as a bridge between couples and talented wedding professionals. While we facilitate these beautiful connections, 
                  all agreements, contracts, and transactions happen directly between you and the vendors. We're here to support the process, 
                  but we're not responsible for the specific services provided by individual vendors.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Content, Your Story</h2>
                <p className="text-gray-700 mb-4">
                  The photos, stories, and memories you share remain yours. By sharing content on our platform, you're giving us permission 
                  to display it as part of our community experience and to help other couples find inspiration for their own journeys.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Privacy is Sacred</h2>
                <p className="text-gray-700 mb-4">
                  Your personal information and wedding details are precious to us. Please review our Privacy Policy to understand 
                  how we protect and honor the trust you place in us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Honest Expectations</h2>
                <p className="text-gray-700 mb-4">
                  We pour our hearts into providing the best possible experience, but like any platform, ours comes "as is." 
                  We can't guarantee that everything will always be perfect, but we promise to do our absolute best for you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Shared Responsibility</h2>
                <p className="text-gray-700 mb-4">
                  While we're committed to providing a wonderful experience, we can't be held responsible for indirect consequences 
                  or issues that arise outside of our direct control. We're all in this together, supporting each other through the journey.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Parting Ways</h2>
                <p className="text-gray-700 mb-4">
                  Sometimes relationships change, and we understand that. Either of us may choose to end the relationship at any time. 
                  If we need to close an account for community guideline violations, we'll do so with care and explanation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Growing Together</h2>
                <p className="text-gray-700 mb-4">
                  As our community grows and evolves, these guidelines may need to change too. We'll always let you know about 
                  significant updates and give you time to review any changes that affect how we support your wedding journey.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. We're Here for You</h2>
                <p className="text-gray-700 mb-4">
                  Questions about these guidelines or anything else? We're here to help with the same warmth and care we bring to everything:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Email: hello@weddingdreams.lk<br />
                    Phone: +94 11 234 5678<br />
                    Address: 123 Wedding Street, Colombo 03, Sri Lanka
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
