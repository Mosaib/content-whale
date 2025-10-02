'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-5 text-center" style={{ background: 'linear-gradient(90deg, #f3f0ff, #fff7e6)' }}>
        <div className="hero mt-5 container">
            <p className="small-heading">We bring you,</p>
            <h1 className="display-4 fw-bold">
                Textual Content Solutions For{' '}
                <span style={{ background: 'linear-gradient(to right, #6f2dbd, #d93f4a, #f7921e)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                All Business Communications!
                </span>
            </h1>
            <p className="sub-title">
                We provide professional content writing, SEO content, and translation services
                for effective communication, maximum reach, and global impact.
            </p>
        </div>
            <Link href="/" className="btn btn-Customprimary text-light mt-5">
              Connect With Us
            </Link>
    </section>
  );
}
