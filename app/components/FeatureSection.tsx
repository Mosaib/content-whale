'use client';
import React from 'react';
import Image from 'next/image';

export default function FeatureSection() {
  const features = [
    {
      icon: '🚚',
      title: 'Blazing-Fast Content Delivery',
      description: 'Our process-driven content writing and editing practices enable us to deliver upto 20,000+ words in just 48 hours.'
    },
    {
      icon: '🎯',
      title: 'TG-focused Content To Boost Lead Generation',
      description: 'We use data-driven content writing practices to drive traffic through funneling and ascertain conversions.'
    },
    {
      icon: 'G',
      isGoogle: true,
      title: 'Original & Authoritative Content That Always Rank',
      description: "Our SMEs and content editors follow Google's E-E-A-T guidelines to ensure every piece of delivered content ranks!"
    },
    {
      icon: '🌐',
      title: 'Translate Your Brand Across All Languages',
      description: 'With 50+ certified multilingual translators and 1000+ global-to-local SME translators, we help you connect globally.'
    }
  ];

  const stats = [
    { number: '100M+', label: 'Words\nWritten', color: '#8B2C8B' },
    { number: '15+', label: 'Countries\ncatered', color: '#D63384' },
    { number: '100K+', label: 'Content Pieces\nDelivered', color: '#8B2C8B' },
    { number: '3000+', label: 'Businesses\nSupported', color: '#8B2C8B' }
  ];

  return (
    <div className="py-5 position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        <Image
          src="/brands/bg.png"
          alt="background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-5" style={{ fontSize: '2.5rem', color: '#2D3748' }}>
            Top Features of Content Whale's<br />Content Writing Services
          </h2>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="mb-3">
                    {feature.isGoogle ? (
                      <div style={{
                        width: '60px',
                        height: '60px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        color: '#4285F4'
                      }}>
                        G
                      </div>
                    ) : (
                      <div style={{ fontSize: '3rem' }}>{feature.icon}</div>
                    )}
                  </div>
                  <h5 className="fw-bold mb-3" style={{ minHeight: '60px' }}>
                    {feature.title}
                  </h5>
                  <p className="text-muted small" style={{ fontSize: '0.9rem' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mt-5 pt-5">
          <h2 className="fw-bold mb-5" style={{ fontSize: '2rem', color: '#2D3748' }}>
            We are PROUD to say that we have:
          </h2>

          <div className="row justify-content-center g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="text-center">
                  <div
                    className="fw-bold mb-2"
                    style={{
                      fontSize: '3.5rem',
                      color: stat.color,
                      lineHeight: '1'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="fw-semibold"
                    style={{
                      fontSize: '1rem',
                      color: '#4A5568',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.75rem !important;
          }
          .fw-bold[style*="3.5rem"] {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}