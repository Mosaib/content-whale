'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PriceSection() {
  const [activeTab, setActiveTab] = useState('Content Writing');
  const [serviceType, setServiceType] = useState('Service Type');
  const [wordCount, setWordCount] = useState(500);

  const calculatePrice = () => {
    const pricePerWord = 4;
    const totalPrice = (wordCount * pricePerWord).toFixed(2);
    return totalPrice.split('.');
  };

  const [priceWhole, priceDecimal] = calculatePrice();

  return (
    <>
      <style jsx>{`
        .pricing-section {
          background: linear-gradient(352deg, #f3f0ff00, #f4f0fc);
        }

        .tab-pills {
          background: white;
          border-radius: 50px;
          padding: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          display: inline-flex;
        }

        .tab-pills button {
          border-radius: 50px;
          padding: 10px 24px;
          font-weight: 600;
          color: #374151;
          border: none;
          background: transparent;
          transition: all 0.3s;
        }

        .tab-pills button.active {
          background: #6B21A8;
          color: white;
        }

        .main-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-select, .form-control {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 500;
        }

        .form-select:focus, .form-control:focus {
          border-color: #9333ea;
          outline: none;
          box-shadow: none;
        }

        .price-display {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(90deg, #42175A 0%, #811861 18.02%, #BB2A5D 35.73%, #E44E49 55%, #FA8333 75.31%, #FBBB18 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          background: #FCD34D;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .btn-get-started {
          background: linear-gradient(to right, #FCD34D, #FB923C);
          color: white;
          font-weight: 700;
          padding: 16px;
          border-radius: 12px;
          border: none;
          transition: all 0.3s;
          width: 100%;
        }

        .btn-get-started:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(251, 146, 60, 0.4);
        }

        .cta-banner {
          background: linear-gradient(to right, #6B21A8, #581c87);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .btn-talk-experts {
          background: white;
          color: #6B21A8;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 12px;
          border: none;
          transition: all 0.3s;
        }

        .btn-talk-experts:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(255,255,255,0.3);
        }

        .recommended-text {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 0.875rem;
        }
      `}</style>

      <section className="pricing-section py-5">
        <div className="price container">
          <h1 className='text-center fw-bold mb-3'>Industry-Leading Quality at Affordable Rates</h1>
          <p className='rates text-center mb-4'>
            Starting at 1.5/word for content writing solutions. No contracts, no commitments.
          </p>

          {/* Tabs */}
          <div className="text-center mb-5">
            <div className="tab-pills">
              <button
                className={activeTab === 'Content Writing' ? 'active' : ''}
                onClick={() => setActiveTab('Content Writing')}
              >
                Content Writing
              </button>
              <button
                className={activeTab === 'SEO Writing' ? 'active' : ''}
                onClick={() => setActiveTab('SEO Writing')}
              >
                SEO Writing
              </button>
              <button
                className={activeTab === 'Translation' ? 'active' : ''}
                onClick={() => setActiveTab('Translation')}
              >
                Translation
              </button>
            </div>
          </div>

          {/* Main Card */}
          <div className="main-card p-4 p-md-5 mb-4">
            <div className="row">
              {/* Left Side - Calculator */}
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="h3 fw-bold mb-4">Calculate your pricing for content</h2>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Content type</label>
                  <select
                    className="form-select"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option>Service Type</option>
                    <option>Blog Writing</option>
                    <option>Article Writing</option>
                    <option>Technical Writing</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="form-label fw-semibold">Word Count</label>
                  <div className="position-relative">
                    <input
                      type="number"
                      className="form-control"
                      value={wordCount}
                      onChange={(e) => setWordCount(Number(e.target.value))}
                    />
                    <span className="recommended-text">recommended</span>
                  </div>
                </div>

                <div>
                  <p className="fw-semibold mb-2">Your price</p>
                  <div className="d-flex align-items-baseline">
                    <span className="h4 text-dark me-2">₹</span>
                    <span className="price-display">
                      {priceWhole}.{priceDecimal}
                    </span>
                    <span className="ms-2">Rupees</span>
                  </div>
                </div>
              </div>

              {/* Right Side - What's Included */}
              <div className="col-md-6">
                <h2 className="h3 fw-bold mb-4">What's Included</h2>

                <div className="d-flex flex-column gap-3 mb-4">
                  {[
                    'SEO-Optimization',
                    '0% Plagiarism [With Report]',
                    '100% AI-free content',
                    'Free revisions',
                    '48 hours delivery'
                  ].map((item, index) => (
                    <div key={index} className="d-flex align-items-center gap-3">
                      <div className="check-icon">
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '14px' }} />
                      </div>
                      <span className="fw-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-get-started">Get Started</button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="cta-banner p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <h3 className="fontMontserrat h2 fw-bold text-white mb-0">Are you looking for</h3>
                <h3 className="fontMontserrat h2 fw-bold text-white">personalized assistance?</h3>
              </div>
              <div className="col-md-4 text-md-end">
                <button className="btn-talk-experts">
                  Talk to our experts →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}