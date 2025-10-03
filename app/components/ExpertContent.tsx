'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CaseStudy {
  id: number;
  logo: string;
  title: string;
  company: string;
  image1: string;
  image2: string;
}

export default function ExpertContent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      logo: '/expert/khataLogo.png',
      title: "KhataBook&apos;s Transformation with Content Whale",
      company: 'KhataBook',
      image1: '/expert/khata.png',
      image2: '/expert/khata.png',
    },
    {
      id: 2,
      logo: '/expert/heritageLogo.png',
      title: 'Putting Heritage Hospitals on the Map',
      company: 'Heritage Hospitals',
      image1: '/expert/heritage.png',
      image2: '/expert/heritage.png',
    },
    {
      id: 3,
      logo: '/expert/knowledgeLogo.png',
      title: 'Digital Transformation Success Story',
      company: 'Company 3',
      image1: '/expert/knowledge.png',
      image2: '/expert/knowledge.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentCards = cardsRef.current; // copy ref for cleanup
        entries.forEach((entry) => {
          const cardId = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(cardId) ? prev : [...prev, cardId]
            );
          }
        });

        return () => {
          currentCards.forEach((card) => {
            if (card) observer.unobserve(card);
          });
        };
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  const cardBackgrounds = [
    'linear-gradient(166.98deg, #FFFFFF -1.49%, #FFD5D5 111.96%)',
    'linear-gradient(166.98deg, #FFFFFF -1.49%, #F3FFFF 111.96%)',
    'linear-gradient(167deg, #fff -1.49%, #fdedfd 111.96%)',
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-3">
              Expert Content Writing Solutions
            </h2>
            <p className="mb-4">
              Providing real-world results. Few <br /> case studies to look at.
            </p>
            <button className="btn btn-purple">Want to Know More?</button>
          </div>

          <div className="col-lg-8">
            <div className="case-studies-wrapper">
              <div className="case-studies-row">
                {caseStudies.map((study, index) => (
                  <div
                    key={study.id}
                    data-id={study.id}
                    ref={(el) => {
                      cardsRef.current[index] = el;
                    }}
                    className={`case-study-card ${
                      visibleCards.includes(study.id) ? 'visible' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(study.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ background: cardBackgrounds[index] }}
                  >
                    <div className="card-content">
                      <div className="logo-container mb-3">
                        <Image
                          src={study.logo}
                          alt={study.company}
                          width={150}
                          height={40}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h5 className="fw-bold mb-4">{study.title}</h5>
                      <div className="images-container">
                        <div
                          className={`image-slider ${
                            hoveredCard === study.id ? 'hovered' : ''
                          }`}
                        >
                          <Image
                            src={study.image1}
                            alt={study.company}
                            width={300}
                            height={200}
                            className="image-item"
                          />
                          <Image
                            src={study.image2}
                            alt={study.company}
                            width={300}
                            height={200}
                            className="image-item"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-purple {
          background: rgba(66, 23, 91, 1);
          color: white;
          font-weight: 600;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .btn-purple:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(107, 33, 168, 0.3);
        }

        .case-studies-row {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .case-study-card {
          flex: 1 1 300px;
          max-width: 300px;
          border-radius: 16px;
          padding: 30px 30px 0px 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.6s ease;
        }
        .case-study-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .case-study-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .images-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-slider {
          display: flex;
          transition: transform 0.6s ease;
          height: 100%;
        }
        .image-slider.hovered {
          transform: translateX(-100%);
        }

        .image-item {
          min-width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .case-study-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
