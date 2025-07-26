'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MeatPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: "✅",
      title: "100% Natural Protein",
      description: "Pure, unprocessed protein that fuels your muscles and supports your active lifestyle."
    },
    {
      icon: "❤️",
      title: "Iron-Rich Goodness",
      description: "Essential iron for energy, focus, and overall vitality in every serving."
    },
    {
      icon: "🧠",
      title: "Brain & Nerve Support",
      description: "Rich in B vitamins and omega-3s that keep your mind sharp and nerves healthy."
    },
    {
      icon: "🌿",
      title: "Hormone-Free Farming",
      description: "Raised naturally without artificial hormones or antibiotics for your peace of mind."
    },
    {
      icon: "🔒",
      title: "Trusted Freshness",
      description: "From farm to table with guaranteed freshness and quality you can taste."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex flex-col pt-20">
        {/* Hero Section */}
        <section className={`px-6 py-16 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Power Your Body with Every Bite of{' '}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">FerriFresh Meat</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover the difference that premium, naturally-raised meat makes in your health and vitality
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
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
                  className={`bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 hover:border-amber-200 transition-all duration-700 delay-${index * 100} ease-out ${
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
        <section className={`px-6 py-20 bg-gradient-to-r from-gray-900 via-amber-900 to-orange-900 text-center transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              You're already holding the best.
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Choose FerriFresh for quality you can trust and taste you'll love.
            </p>
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose FerriFresh.
              </p>
              <p className="text-amber-100 text-lg">
                Your body deserves nothing less than premium quality meat.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
} 