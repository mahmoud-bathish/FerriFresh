'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EggsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: "🥚",
      title: "Farm Fresh Daily",
      description: "Collected fresh every morning from our free-range hens for maximum freshness and quality."
    },
    {
      icon: "🌿",
      title: "Free-Range & Natural",
      description: "Hens roam freely in open pastures, eating natural feed for healthier, tastier eggs."
    },
    {
      icon: "💪",
      title: "Complete Protein Source",
      description: "All 9 essential amino acids in perfect balance for muscle building and recovery."
    },
    {
      icon: "🧠",
      title: "Brain Health Boost",
      description: "Rich in choline and omega-3s that support memory, focus, and cognitive function."
    },
    {
      icon: "🔒",
      title: "Quality Guaranteed",
      description: "Rigorous quality control ensures every egg meets our premium standards."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 flex flex-col pt-20">
        {/* Hero Section */}
        <section className={`px-6 py-16 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your Day with Nature's Perfect{' '}
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Protein</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover the incredible taste and nutrition of our farm-fresh, free-range eggs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-16 bg-white/80 backdrop-blur-sm flex-1">
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white to-yellow-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-100/50 hover:border-yellow-200 transition-all duration-700 delay-${index * 100} ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`px-6 py-20 bg-gradient-to-r from-gray-900 via-yellow-900 to-orange-900 text-center transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nature's most complete food.
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Choose FerriFresh eggs for breakfast that fuels your day with pure nutrition.
            </p>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose FerriFresh Eggs.
              </p>
              <p className="text-yellow-100 text-lg">
                Your morning deserves the perfect start with our premium eggs.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
} 