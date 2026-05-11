'use client';
import React from 'react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    icon: '/assets/imgs/page/homepage1/icon-top-banner.png',
    title: 'Create Your Profile',
    desc: 'Upload your trade certificate or skill card. Fill in your work history in simple steps.',
    color: 'bg-brand-2',
  },
  {
    step: '02',
    icon: '/assets/imgs/page/homepage1/icon-bottom-banner.png',
    title: 'Browse & Apply Jobs',
    desc: 'Search jobs by location, trade, or salary. Apply with one tap — no lengthy forms.',
    color: 'bg-brand-1',
  },
  {
    step: '03',
    icon: '/assets/imgs/page/homepage1/key-numbers.svg',
    title: 'Get Hired Fast',
    desc: 'Recruiters shortlist you directly. Get notified and confirm your joining quickly.',
    color: 'bg-brand-2',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-box mt-70 mb-50">
      <div className="container">
        <div className="text-center mb-50">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            How It Works
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Get hired in 3 simple steps — no complicated forms, no waiting around
          </p>
        </div>
        <div className="row mt-40">
          {steps.map((s, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30">
              <div className="card-grid-1 hover-up wow animate__animated animate__fadeInUp" style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '12px', border: '1px solid #e0e6f7' }}>
                <div className="mb-20" style={{ fontSize: '40px', fontWeight: 800, color: '#3c65f5', opacity: 0.15 }}>
                  {s.step}
                </div>
                <div className="mb-20">
                  <img src={s.icon} alt={s.title} style={{ width: 60, height: 60, objectFit: 'contain' }} />
                </div>
                <h5 className="mb-10">{s.title}</h5>
                <p className="font-sm color-text-paragraph">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-30">
          <Link href="/register" className="btn btn-default">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
