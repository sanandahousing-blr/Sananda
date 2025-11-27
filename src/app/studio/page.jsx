"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                  Since 2008, SANANDA HOUSING PRIVATE LIMITED has been at the forefront of luxury interior design and construction, transforming visions into reality with unmatched precision and creativity.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  We are a team of passionate designers, architects, and craftsmen dedicated to creating exceptional spaces that blend innovation, functionality, and timeless elegance.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/studio/about-hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Years of Excellence</p>
                  <h2>15+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Completed Projects</p>
                  <h2>150+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Expert Team Members</p>
                  <h2>50+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Happy Clients</p>
                  <h2>100+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Design Awards</p>
                  <h2>12</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          img="/studio/about-cta-window.jpg"
          header="Our Philosophy"
          callout="Excellence in Every Detail"
          description="We believe that great design is born from the perfect harmony of aesthetics, functionality, and quality craftsmanship. Every project reflects our commitment to transforming spaces into extraordinary experiences."
        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
