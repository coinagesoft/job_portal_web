"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const roles = [
  { title: "Welding and Fabrication", jobs: "341", bg: "/assets/imgs/page/homepage2/img-big1.png", industry: "Construction" },
  { title: "Electrical and HVAC", jobs: "298", bg: "/assets/imgs/page/homepage2/img-big2.png", industry: "Facility" },
  { title: "Construction Trades", jobs: "412", bg: "/assets/imgs/page/homepage2/img-big3.png", industry: "Construction" },
  { title: "Marine and Offshore", jobs: "286", bg: "/assets/imgs/page/homepage2/img-big1.png", industry: "Marine" },
  { title: "Logistics and Transport", jobs: "265", bg: "/assets/imgs/page/homepage2/img-big2.png", industry: "Logistics" },
  { title: "Facility and Maintenance", jobs: "224", bg: "/assets/imgs/page/homepage2/img-big3.png", industry: "Facility" },
  { title: "Oil and Gas", jobs: "178", bg: "/assets/imgs/page/homepage2/img-big1.png", industry: "Oil and Gas" },
  { title: "Manufacturing Roles", jobs: "134", bg: "/assets/imgs/page/homepage2/img-big2.png", industry: "Manufacturing" },
];

export default function JobsByRole() {
  return (
    <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs by Role</h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Openings grouped by job role and work category
            </p>
          </div>
          <div className="box-swiper mt-50">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{ nextEl: ".swiper-role-next", prevEl: ".swiper-role-prev" }}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="swiper-group-role mh-none swiper"
              style={{ paddingBottom: "70px", paddingTop: "5px" }}
            >
              {roles.map((role) => (
                <SwiperSlide key={`${role.title}-${role.industry}`} className="hover-up">
                  <div className="card-grid-5 card-category hover-up" style={{ backgroundImage: `url(${role.bg})` }}>
                    <Link href={`/jobs-list?industry=${encodeURIComponent(role.industry)}`}>
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
