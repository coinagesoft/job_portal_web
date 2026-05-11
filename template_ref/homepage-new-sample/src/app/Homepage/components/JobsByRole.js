'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const roles = [
  {
    title: 'Welding & Fabrication',
    jobs: '341',
    bg: '/assets/imgs/page/homepage2/img-big1.png',
    icon: '/assets/imgs/page/homepage1/management.svg',
    param: 'Welding',
  },
  {
    title: 'Electrical & HVAC',
    jobs: '298',
    bg: '/assets/imgs/page/homepage2/img-big2.png',
    icon: '/assets/imgs/page/homepage1/finance.svg',
    param: 'Electrical',
  },
  {
    title: 'Construction Trades',
    jobs: '412',
    bg: '/assets/imgs/page/homepage2/img-big3.png',
    icon: '/assets/imgs/page/homepage1/human.svg',
    param: 'Construction',
  },
  {
    title: 'Marine & Offshore',
    jobs: '286',
    bg: '/assets/imgs/page/homepage2/img-big1.png',
    icon: '/assets/imgs/page/homepage1/retail.svg',
    param: 'Marine',
  },
  {
    title: 'Logistics & Transport',
    jobs: '265',
    bg: '/assets/imgs/page/homepage2/img-big2.png',
    icon: '/assets/imgs/page/homepage1/marketing.svg',
    param: 'Logistics',
  },
  {
    title: 'Facility & Maintenance',
    jobs: '224',
    bg: '/assets/imgs/page/homepage2/img-big3.png',
    icon: '/assets/imgs/page/homepage1/management.svg',
    param: 'Maintenance',
  },
  {
    title: 'Oil & Gas',
    jobs: '178',
    bg: '/assets/imgs/page/homepage2/img-big1.png',
    icon: '/assets/imgs/page/homepage1/security.svg',
    param: 'Oil and Gas',
  },
  {
    title: 'Safety & Compliance',
    jobs: '134',
    bg: '/assets/imgs/page/homepage2/img-big2.png',
    icon: '/assets/imgs/page/homepage1/research.svg',
    param: 'Safety',
  },
];

export default function JobsByRole() {
  return (
    <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
              Jobs by Role
            </h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Search and connect with the right candidates faster.
            </p>
          </div>
          <div className="box-swiper mt-50">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                nextEl: '.swiper-role-next',
                prevEl: '.swiper-role-prev',
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="swiper-group-role mh-none swiper"
              style={{ paddingBottom: '70px', paddingTop: '5px' }}
            >
              {roles.map((role, index) => (
                <SwiperSlide key={index} className="hover-up">
                  <div
                    className="card-grid-5 card-category hover-up"
                    style={{ backgroundImage: `url(${role.bg})` }}
                  >
                    <Link href={`/jobs-list?industry=${encodeURIComponent(role.param)}`}>
                      <div className="box-cover-img">
                        <div className="content-bottom">
                          <h6 className="color-white mb-5">{role.title}</h6>
                          <p className="color-white font-xs">
                            <span>{role.jobs}</span>
                            <span> Jobs Available</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next swiper-role-next"></div>
            <div className="swiper-button-prev swiper-role-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
