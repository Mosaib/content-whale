'use client';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum kyl nihävis på begösode. Antiposäde evirar fastän neng nifesk. Binar funde. Spesade dohilogi ultrapätt, ponur. Bin krodår fastän niv. Du kan vara drabbad.",
    author: "Samrth Iyer",
    date: "2022.03.06"
  },
  {
    id: 2,
    text: "Another testimonial goes here. It can span multiple lines and explain the user's experience with incredible detail and satisfaction.",
    author: "Jane Doe",
    date: "2023.01.12"
  },
  {
    id: 3,
    text: "Third testimonial content goes here. Add as many as needed to showcase your excellent reviews and customer satisfaction.",
    author: "John Smith",
    date: "2023.06.22"
  }
];

export default function TestimonialContent() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <style jsx>{`
        .testimonial-section {
          background: linear-gradient(135deg, #f3e7ff 0%, #ffffff 50%, #f3e7ff 100%);
          min-height: 100vh;
          padding: 80px 0;
        }

        .testimonial-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 2.5rem;
          position: relative;
          margin-top: 40px;
        }

        .quote-icon {
          position: absolute;
          top: -40px;
          left: -40px;
          width: 80px;
          height: 80px;
          background: #4a1d6f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(74, 29, 111, 0.3);
        }

        .testimonial-text {
          color: #333;
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }

        .author-name {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .author-date {
          color: #6c757d;
          font-size: 0.875rem;
        }

        .read-more {
          color: #4a1d6f;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: white;
          border: none;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .nav-arrow:hover {
          background: #f3e7ff;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow.prev {
          left: -25px;
        }

        .nav-arrow.next {
          right: -25px;
        }

        .pagination-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 1.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #4a1d6f;
          width: 32px;
          border-radius: 5px;
        }

        .section-title {
          font-family: Lato, sans-serif !important;
          font-weight: 700;
          font-size: 51.08px;
          line-height: 100%;
          letter-spacing: 0%;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .section-description {
          color: #000;
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 991px) {
          .section-title {
            font-size: 2rem;
          }

          .testimonial-card {
            margin-top: 60px;
          }
        }
      `}</style>

      <section className="testimonial-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <svg viewBox="0 0 24 24" fill="white">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>

                  <p className="testimonial-text">
                    {testimonials[current].text}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="author-name mb-0">{testimonials[current].author}</p>
                      <p className="author-date mb-0">{testimonials[current].date}</p>
                    </div>
                    <a href="#" className="read-more">Read more</a>
                  </div>
                </div>

                <button
                  className="nav-arrow prev"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  className="nav-arrow next"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>

                <div className="pagination-dots">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`dot ${current === idx ? 'active' : ''}`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div>
                <h2 className="section-title">
                  Don&apos;t Just Take Our Word for it
                </h2>
                <p className="section-description">
                  We&apos;ve been reviewed more than 20,000 times with an average of 4.5 out 5 rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}