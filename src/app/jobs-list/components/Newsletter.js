"use client";

import React from "react";

const Newsletter = () => {
  return (
    <section className="section-box mt-50 mb-20">
      <div className="container">
        <div
          className="box-newsletter"
          style={{
            background:
              "#ff9900",

            border:
              "1px solid rgba(255,255,255,0.18)",

            borderRadius: "28px",

            position: "relative",
            overflow: "hidden",

            boxShadow:
              "0 18px 40px rgba(255, 153, 0, 0.22)",

            padding: "60px 40px",
          }}
        >
          {/* Orange Glow Effects */}
          <div
            style={{
              position: "absolute",
              right: "-120px",
              top: "-120px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.12)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "-120px",
              bottom: "-120px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "rgba(255,255,255,0.08)",
              filter: "blur(18px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="row"
            style={{
              position: "relative",
              zIndex: 2,
              alignItems: "center",
            }}
          >
            {/* LEFT IMAGE */}
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="/assets/imgs/template/newsletter-left.png"
                alt="jobBox"
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="col-lg-12 col-xl-6 col-12">
              <h2
                className="text-md-newsletter text-center"
                style={{
                  color: "#ffffff",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  marginBottom: 0,
                }}
              >
                New Things Will Always
                <br />
                Update Regularly
              </h2>

              <div className="box-form-newsletter mt-40">
                <form
                  className="form-newsletter"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <input
                    className="input-newsletter"
                    type="text"
                    placeholder="Enter your email here"
                    style={{
                      flex: 1,
                      minWidth: "280px",
                      height: "58px",
                      borderRadius: "14px",
                      border: "none",
                      padding: "0 22px",
                      background:
                        "rgba(255,255,255,0.96)",
                      color: "#122359",
                      fontSize: "15px",
                      fontWeight: 500,
                      outline: "none",
                    }}
                  />

                  <button
                    className="btn btn-default font-heading icon-send-letter"
                    style={{
                      height: "58px",
                      padding: "0 28px",
                      borderRadius: "14px",
                      background: "#122359",
                      color: "#ffffff",
                      border: "none",
                      fontWeight: 700,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(18,35,89,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0px)";
                      e.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <img
                src="/assets/imgs/template/newsletter-right.png"
                alt="jobBox"
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;