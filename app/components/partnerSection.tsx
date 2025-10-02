'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-5 text-center" style={{ background: 'linear-gradient(90deg, #f3f0ff, #fff7e6)' }}>
        <div className="partner container">
            <h2>Trusted by <span className='text-warning'>2,000+ Brands</span></h2>
            <div className="mt-4 row justify-content-center align-items-center g-4 g-lg-5">
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand1.svg" width={90} height={30} alt="brand1" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand2.svg" width={90} height={20} alt="brand2" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand3.svg" width={90} height={30} alt="brand3" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand4.svg" width={90} height={30} alt="brand4" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand5.svg" width={90} height={30} alt="brand5" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand6.svg" width={90} height={30} alt="brand6" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand7.svg" width={90} height={30} alt="brand7" className="logo-image"/>
                </div>
                <div className="col-3 col-lg-auto">
                    <Image src="/brands/brand8.svg" width={90} height={30} alt="brand8" className="logo-image"/>
                </div>
            </div>
        </div>
    </section>
  );
}