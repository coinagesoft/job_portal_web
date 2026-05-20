"use client";

import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: "fa-solid fa-user-gear",
    title: "Create Your Profile",
    desc: "Upload your trade details and work history in simple steps.",
  },
  {
    step: "02",
    icon: "fa-solid fa-briefcase",
    title: "Choose Jobs Fast",
    desc: "Browse jobs by location, role, and salary and apply quickly.",
  },
  {
    step: "03",
    icon: "fa-solid fa-file-circle-check",
    title: "Track Application",
    desc: "Get updates from recruiters and move ahead with confidence.",
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
            Complete your journey in 3 simple steps
          </p>
        </div>

        <div className="row mt-40">
          {steps.map((item) => (
            <div
              key={item.step}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30"
            >
              <div className="card-grid-2 grid-bd-16 hover-up how-work-card position-relative h-100">
                
                {/* Top Step Badge */}
                <span className="lbl-hot">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="how-work-icon">
                  <i className={item.icon}></i>
                </div>

                {/* Content */}
                <div className="card-block-info text-center">
                  <h5 className="mb-15">{item.title}</h5>

                  <p className="font-sm color-text-paragraph">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-30">
          <Link href="/register" className="btn btn-default">
            Start Now
          </Link>
        </div>
      </div>
    </section>
  );
}