'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const recruiters = [
  { name: 'Gulf Contractors', location: 'Dubai, UAE', openJobs: 25, rating: 68, img: '/assets/imgs/brands/brand-1.png' },
  { name: 'Shapoorji Pallonji', location: 'Mumbai, India', openJobs: 17, rating: 42, img: '/assets/imgs/brands/brand-2.png' },
  { name: 'Petrofac', location: 'Abu Dhabi, UAE', openJobs: 65, rating: 46, img: '/assets/imgs/brands/brand-3.png' },
  { name: 'L&T Construction', location: 'Chennai, India', openJobs: 25, rating: 68, img: '/assets/imgs/brands/brand-4.png' },
  { name: 'DP World', location: 'Dubai, UAE', openJobs: 34, rating: 87, img: '/assets/imgs/brands/brand-5.png' },
  { name: 'Adani Ports', location: 'Ahmedabad, India', openJobs: 56, rating: 34, img: '/assets/imgs/brands/brand-6.png' },
  { name: 'McDermott', location: 'Doha, Qatar', openJobs: 78, rating: 124, img: '/assets/imgs/brands/brand-7.png' },
  { name: 'Saipem', location: 'Riyadh, KSA', openJobs: 98, rating: 54, img: '/assets/imgs/brands/brand-8.png' },
  { name: 'NMDC Group', location: 'Abu Dhabi, UAE', openJobs: 90, rating: 76, img: '/assets/imgs/brands/brand-9.png' },
  { name: 'Bharat Heavy', location: 'Delhi, India', openJobs: 34, rating: 89, img: '/assets/imgs/brands/brand-10.png' },
];

const StarRating = () => (
  <>
    {[1,2,3,4,5].map(i => (
      <img key={i} alt="star" src="/assets/imgs/template/icons/star.svg" style={{ width: 12, height: 12, marginRight: 2 }} />
    ))}
  </>
);

export default function TopRecruiters() {
  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-start">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Top Recruiters
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Discover your next career move with leading employers
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box-swiper mt-50">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-recruiter-next',
              prevEl: '.swiper-recruiter-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="swiper-group-recruiter swiper-style-2 swiper"
          >
            {recruiters.map((rec, index) => (
              <SwiperSlide key={index}>
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <Link href="/jobs-list">
                    <div className="item-logo">
                      <div className="image-left">
                        <img alt={rec.name} src={rec.img} />
                      </div>
                      <div className="text-info-right">
                        <h4>{rec.name}</h4>
                        <StarRating />
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span><span>{rec.rating}</span><span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">{rec.location}</span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          {rec.openJobs}<span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next swiper-recruiter-next"></div>
          <div className="swiper-button-prev swiper-recruiter-prev"></div>
        </div>
      </div>
    </section>
  );
}
