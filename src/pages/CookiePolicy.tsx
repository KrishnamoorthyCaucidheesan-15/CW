
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/shared/Breadcrumbs';

const CookiePolicy = () => {
  const breadcrumbItems = [
    { label: 'Cookie Policy' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember your preferences and improve your browsing experience.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">WeddingDreams uses cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Essential website functionality and security</li>
                  <li>Remembering your login status and preferences</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Personalizing content and advertisements</li>
                  <li>Improving our services and user experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are necessary for the website to function properly. They enable 
                    basic functions like page navigation, security, and access to secure areas.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies collect information about how visitors use our website, such as 
                    which pages are visited most often. This data helps us improve our website's performance.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies allow the website to remember choices you make and provide 
                    enhanced, more personal features.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeting/Advertising Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies are used to deliver advertisements that are more relevant to you 
                    and your interests.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that set cookies on our website, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Advertising networks for targeted advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Use our cookie consent banner to adjust your preferences</li>
                  <li>Modify your browser settings to block or delete cookies</li>
                  <li>Use browser plugins to manage cookie permissions</li>
                  <li>Opt out of targeted advertising through industry tools</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Note: Disabling certain cookies may affect your website experience and limit some functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Duration</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Session Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These are temporary cookies that are deleted when you close your browser.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
                  <p className="text-gray-700 mb-4">
                    These cookies remain on your device for a set period or until you delete them manually.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Email: cookies@weddingdreams.lk<br />
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

export default CookiePolicy;
