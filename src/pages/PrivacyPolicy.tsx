
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy & Trust' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Privacy Matters to Us</h1>
            <p className="text-gray-600 mb-8">We cherish your trust as much as you cherish your love story. Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. The Information We Safeguard</h2>
                <p className="text-gray-700 mb-4">
                  We collect information that helps us create a personalized and magical experience for your wedding journey. 
                  This includes details you lovingly share with us:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Your personal details (name, email, phone) to keep you connected</li>
                  <li>Wedding dreams, preferences, and special moments you want to preserve</li>
                  <li>Secure payment information (handled by trusted third-party providers)</li>
                  <li>Conversations with vendors and fellow couples in our community</li>
                  <li>Beautiful photos and memories you choose to share in your profile or vision boards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Honor Your Information</h2>
                <p className="text-gray-700 mb-4">Every piece of information you share helps us create magic in your wedding planning experience:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Deliver a personalized, seamless planning experience tailored to your love story</li>
                  <li>Connect you with wedding professionals who understand your vision</li>
                  <li>Share inspiring content, helpful tips, and exclusive offers with our community</li>
                  <li>Provide caring, responsive support whenever you need assistance</li>
                  <li>Process transactions securely and send important updates</li>
                  <li>Create a wedding planning experience that's uniquely yours</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing with Care</h2>
                <p className="text-gray-700 mb-4">
                  We treat your information like precious wedding memorabilia - with utmost care and only in these trusted circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>With wedding vendors when you express interest in their beautiful services</li>
                  <li>With trusted partners who help us make your wedding planning dreams come true</li>
                  <li>When legally required to protect our community's safety and well-being</li>
                  <li>In the rare event of a business transition (with the same commitment to your privacy)</li>
                  <li>When you give us permission or direct us to share</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protecting Your Digital Love Story</h2>
                <p className="text-gray-700 mb-4">
                  We guard your personal information with the same dedication you put into planning your perfect day. 
                  Our security measures protect against unauthorized access, ensuring your wedding planning journey remains safe and private. 
                  While we strive for perfection, we want you to know that no online platform can guarantee 100% security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights, Your Choices</h2>
                <p className="text-gray-700 mb-4">Just like your wedding, you have complete control over your privacy preferences:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>View and update your personal information anytime</li>
                  <li>Delete your account and associated memories if you choose</li>
                  <li>Opt out of our loving community newsletters and updates</li>
                  <li>Request a copy of all the information we've stored for you</li>
                  <li>Object to certain uses of your data that don't feel right to you</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Digital Footprints & Analytics</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience, understand how our community uses the platform, 
                  and provide content that resonates with your wedding planning needs. You can manage these preferences in your browser settings. 
                  For detailed information, please see our Cookie Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. A Safe Space for All</h2>
                <p className="text-gray-700 mb-4">
                  Our platform is designed for couples 18 and older who are ready to embark on their wedding journey. 
                  We do not knowingly collect information from anyone under 18 years of age.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Let's Talk</h2>
                <p className="text-gray-700 mb-4">
                  Have questions about your privacy or how we handle your information? We're here to help with the same care we put into everything we do:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Email: privacy@weddingdreams.lk<br />
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

export default PrivacyPolicy;
