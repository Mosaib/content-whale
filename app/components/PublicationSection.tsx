'use client';
import React from 'react';
import Image from 'next/image';

export default function PublicationSection() {
  return (
    <div className="py-5 position-relative" style={{ overflow: 'hidden' }}>
        {/* <div className="underlay desktop-only">
            <Image
                src="/bg_2.png"
                alt="background"
                fill
                className='bg-curve'
            />
        </div> */}

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h1 className="fw-bold mt-5 mb-3">
            Featured Mentions & Publications
          </h1>
          <span className="publicationSubtitle">From AMA to Forbes, we have been mentioned in many <br/>reputed journals and publications.</span>
            <div className="row g-5 mt-4">
                <div className="col-md-3">
                     <Image src="/publication/1.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/2.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/3.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/4.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/5.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/6.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/7.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/8.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/9.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/10.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/11.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
                <div className="col-md-3">
                     <Image src="/publication/12.png" width={80} height={80} className='w-100' alt="publication"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}