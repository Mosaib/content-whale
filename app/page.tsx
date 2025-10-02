'use client';

export default function Home() {
  return (
    <div>
      {/* This will appear BELOW the HeroSection from RootLayout */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-secondary">We offer SEO, content writing, and copywriting solutions.</p>
        </div>
      </section>
    </div>
  );
}
