'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [showContentDropdown, setShowContentDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/logo.svg" alt="Content Whale Logo" width={200} height={45} className="logo-image" priority />
          </Link>
          <button className='custom-gradient btn text-light mobile-only'>Contact Us</button>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="nav-left">
              {/* Content Solutions */}
              <div
                className={`nav-item desktop-only ${showContentDropdown ? 'show' : ''}`}
                onMouseEnter={() => setShowContentDropdown(true)}
                onMouseLeave={() => setShowContentDropdown(false)}
              >
                <button className="nav-link" aria-expanded={showContentDropdown}>
                  Content Solutions
                </button>
              </div>

              <div
                className={`nav-item desktop-only ${showResourcesDropdown ? 'show' : ''}`}
                onMouseEnter={() => setShowResourcesDropdown(true)}
                onMouseLeave={() => setShowResourcesDropdown(false)}
              >
                <button className="nav-link" aria-expanded={showResourcesDropdown}>
                  Resources
                </button>
              </div>

              <Link href="/" className="nav-link">About Us</Link>
            </div>

            <div className="nav-right">
              <div className="rank-container">
                <Link href="/" className="text-decoration-none rank-link">
                  <span className="rank-purple">Rank</span>
                  <span className="rank-orange"> On</span>
                  <span className="rank-yellow"> AI</span>
                </Link>
                <span className="new-badge">NEW</span>
              </div>

              <Link href="/" className="custom-gradient text-light">
                Let's Talk →
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Styles */}
      <style jsx>{`
        .mobile-only {
          display: none;
        }

        @media (max-width: 992px) {
          /* Show only on mobile */
          .mobile-only {
            display: inline-block;
          }
        }
        .navbar {
          background: white;
          padding: 0.8rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          margin-left: 2rem;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          background: none;
          border: none;
          color: #000;
          font-size: 17px;
          font-weight: 400;
          cursor: pointer;
          padding: 0;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #7B1FA2;
        }

        .nav-link::after {
          display: inline-block;
          content: "";
          width: 14px;
          height: 14px;
          margin-left: 6px;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.64645 0.646447C8.84171 0.451184 9.15822 0.451184 9.35348 0.646447C9.54874 0.841709 9.54874 1.15822 9.35348 1.35348L5.35348 5.35348C5.15822 5.54874 4.84171 5.54874 4.64645 5.35348L0.646447 1.35348C0.451184 1.15822 0.451184 0.841709 0.646447 0.646447C0.841709 0.451184 1.15822 0.451184 1.35348 0.646447L4.99996 4.29293L8.64645 0.646447Z' fill='black'/%3E%3C/svg%3E");
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          vertical-align: middle;
          transition: transform 0.3s;
        }

        .nav-item.show .nav-link::after {
          transform: rotate(180deg);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

      .rank-container {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .rank-link {
        font-size: 32px;
        font-weight: 700;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-family: 'Arial', sans-serif;
      }

      .rank-purple {
        color: #7B2C8E; /* Deep purple */
      }

      .rank-orange {
        color: #FF8C42; /* Coral orange */
      }

      .rank-yellow {
        color: #FFB800; /* Golden yellow */
      }

      .new-badge {
        position: relative;
        background: linear-gradient(135deg, #FFD54F 0%, #FFA726 100%);
        color: #fff;
        padding: 6px 12px;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        clip-path: polygon(
          50% 0%,
          61% 35%,
          98% 35%,
          68% 57%,
          79% 91%,
          50% 70%,
          21% 91%,
          32% 57%,
          2% 35%,
          39% 35%
        );
        min-width: 60px;
        min-height: 60px;
        box-shadow: 0 2px 8px rgba(255, 167, 38, 0.4);
        animation: wobble 2s ease-in-out infinite;
      }
      @keyframes wobble {
        0%, 100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(-5deg);
        }
        75% {
          transform: rotate(5deg);
        }
      }



        @media (max-width: 992px) {
          .mobile-toggle { display: flex; }
          .desktop-only { display: none; }

          .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 300px;
            height: calc(100vh - 70px);
            flex-direction: column;
            padding: 2rem;
            box-shadow: -4px 0 15px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
            background: white;
            gap: 2rem;
          }

          .nav-menu.active { right: 0; }

          .nav-left, .nav-right { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
          .talk-button { width: 100%; text-align: center; }
        }
      `}</style>
    </>
  );
}
