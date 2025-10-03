'use client';
import React from 'react';
import Image from 'next/image';

export default function FeatureSection() {

const stats = [
    { number: '100M+', label: 'Words\nWritten'},
    { number: '15+', label: 'Countries\ncatered'},
    { number: '100K+', label: 'Content Pieces\nDelivered'},
    { number: '3000+', label: 'Businesses\nSupported'}
];

  return (
    <div className="py-5 position-relative" style={{ overflow: 'hidden' }}>
      {/* Background Image */}

      <div className="underlay desktop-only">
            <Image
                src="/bg_1.png"
                alt="background"
                fill
                className='bg-curve'
            />
        </div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h1 className="fw-bold my-5">
            Top Features of Content Whale's<br />Content Writing Services
          </h1>

            <div className="row g-5">
                <div className="col-md-3">
                     <Image src="/features/1.png" width={80} height={80} alt="feature1"/>
                     <h3 className="featureTitle mt-3 mb-2">Blazing-Fast <br/>Content Delivery</h3>
                     <p className="text-secondary">Our process-driven content writing and editing practices enable us to deliver upto 20,000+ words in just 48 hours.</p>
                </div>

                <div className="col-md-3">
                     <Image src="/features/2.png" width={80} height={80} alt="feature2"/>
                     <h3 className="featureTitle mt-3 mb-2">TG-focused Content To Boost Lead Generation</h3>
                     <p className="text-secondary">We use data-driven content writing practices to drive traffic through funneling and ascertain conversions.</p>
                </div>

                <div className="col-md-3">
                     <Image src="/features/3.png" width={80} height={80} alt="feature3"/>
                     <h3 className="featureTitle mt-3 mb-2">Original & Authoritative Content That Always Rank</h3>
                     <p className="text-secondary">Our SMEs and content editors follow Google’s E-E-A-T guidelines to ensure every piece of delivered content ranks!</p>
                </div>

                <div className="col-md-3">
                     <Image src="/features/1.png" width={80} height={80} alt="feature1"/>
                     <h3 className="featureTitle mt-3 mb-2">Translate Your Brand Across All Languages</h3>
                     <p className="text-secondary">With 50+ certified multilingual translators and 1000+ global-to-local SME translators, we help you connect globally.</p>
                </div>
            </div>
        </div>

        <div className="text-center mt-5 pt-5">
          <h1 className="mb-5 fw-bold ">We are PROUD to say that we have:</h1>

          <div className="row justify-content-center g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="text-center">
                  <div
                    className="numbers"
                  >
                    {stat.number}
                  </div>
                  <div
                    className="numberLable">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}