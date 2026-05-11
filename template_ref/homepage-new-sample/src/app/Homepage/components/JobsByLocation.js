'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const locations = [
  {
    city: 'Dubai',
    country: 'UAE',
    vacancies: '320',
    companies: '85',
    badge: 'Hot',
    img: '/assets/imgs/page/homepage1/location1.png',
    param: 'Dubai',
  },
  {
    city: 'Abu Dhabi',
    country: 'UAE',
    vacancies: '210',
    companies: '60',
    badge: 'Trending',
    img: '/assets/imgs/page/homepage1/location2.png',
    param: 'Abu Dhabi',
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    vacancies: '180',
    companies: '52',
    badge: 'Hot',
    img: '/assets/imgs/page/homepage1/location3.png',
    param: 'Riyadh',
  },
  {
    city: 'Mumbai',
    country: 'India',
    vacancies: '415',
    companies: '130',
    badge: '',
    img: '/assets/imgs/page/homepage1/location4.png',
    param: 'Mumbai',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    vacancies: '145',
    companies: '48',
    badge: '',
    img: '/assets/imgs/page/homepage1/location5.png',
    param: 'Singapore',
  },
  {
    city: 'Doha',
    country: 'Qatar',
    vacancies: '160',
    companies: '44',
    badge: '',
    img: '/assets/imgs/page/homepage1/location6.png',
    param: 'Doha',
  },
  {
    city: 'Pune',
    country: 'India',
    vacancies: '280',
    companies: '95',
    badge: '',
    img: '/assets/imgs/page/homepage1/location1.png',
    param: 'Pune',
  },
  {
    city: 'Chennai',
    country: 'India',
    vacancies: '195',
    companies: '70',
    badge: '',
    img: '/assets/imgs/page/homepage1/location2.png',
    param: 'Chennai',
  },
];

export default function JobsByLocation() {
  return (
    <section className="section-box mt-50 mb-20">
      <div className="container">
        <div className="text-start">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Jobs by Location
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Find your favourite jobs and get the benefits of yourself
          </p>
        </div>
        <div className="box-swiper mt-50">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-location-next',
              prevEl: '.swiper-location-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="swiper-group-location swiper"
            style={{ paddingBottom: '10px', paddingTop: '5px' }}
          >
            {locations.map((loc, index) => (
              <SwiperSlide key={index} className="hover-up">
                <div className="card-image-top hover-up">
                  <Link href={`/jobs-list?location=${encodeURIComponent(loc.param)}`}>
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${loc.img})` }}
                    >
                      {loc.badge && <span className="lbl-hot">{loc.badge}</span>}
                    </div>
                  </Link>
                  <div className="informations">
                    <Link href={`/jobs-list?location=${encodeURIComponent(loc.param)}`}>
                      <h5>
                        {loc.city}
                        <span className="font-sm color-text-paragraph-2 ml-5">, {loc.country}</span>
                      </h5>
                    </Link>
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <span className="text-14 color-text-paragraph-2">{loc.vacancies} Vacancies</span>
                      </div>
                      <div className="col-lg-6 col-6 text-end">
                        <span className="color-text-paragraph-2 text-14">{loc.companies} companies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next swiper-location-next"></div>
          <div className="swiper-button-prev swiper-location-prev"></div>
        </div>
      </div>
    </section>
  );
}
