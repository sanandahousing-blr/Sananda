"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import ExpertisePopup from "@/components/ExpertisePopup/ExpertisePopup";
import { expertiseData } from "@/data/expertise-data";

let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);

      // Show words animation
      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        }
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>SANANDA</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>HOUSING</h1>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/home/hero.jpg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={0.85}>
                <h1>Building Dreams, Crafting Spaces Where Luxury Meets Functionality</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={1}>
                <p>
                  Since 2010, SANANDA HOUSING PRIVATE LIMITED has been transforming visions into reality through expert construction, innovative interior design, and custom furniture solutions that define modern living.
                </p>
              </Copy>
            </div>
            <AnimatedButton
              label="Get In Touch"
              route="/connect"
              animateOnScroll={false}
              delay={1.15}
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>15+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Years of Excellence</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>150+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Success Projects</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>50+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Team Members</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>100+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Satisfied Clients</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                At SANANDA HOUSING PRIVATE LIMITED, we bring technical expertise and innovative design concepts together to create spaces that are perfectly tailored to your unique lifestyle and vision.
              </h1>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p>Our Expertise</p>
              </Copy>

              <Copy delay={0.15}>
                <p className="lg">
                  From concept to completion, we deliver comprehensive construction and design solutions. Our team combines years of experience with cutting-edge techniques to transform residential and commercial spaces into functional works of art.
                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.construction);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>Construction</h3>
                </div>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.interiorDesign);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>Interior Design</h3>
                </div>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.customFurniture);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>Custom Furniture</h3>
                </div>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.planning2d3d);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>2D/3D Planning</h3>
                </div>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.officeSetup);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>Office Setup</h3>
                </div>
                <div
                  className="what-we-do-tag"
                  onClick={() => {
                    setSelectedExpertise(expertiseData.modernInteriors);
                    setIsPopupOpen(true);
                  }}
                >
                  <h3>Modern Interiors</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowWeWork />
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Our Projects</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>Explore our portfolio of exceptional construction and interior design projects</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section>
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=80" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>500+</h3>
                  <p>Design Inspirations</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  Discover the breadth of our work across residential villas, modern apartments, commercial spaces, and custom office interiors. Each project showcases our commitment to quality, innovation, and client satisfaction.
                </h3>
              </Copy>
              <AnimatedButton label="View All Projects" route="/spaces" />
            </div>
          </div>
        </div>
      </section>
      <CTAWindow
        img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80"
        header="SANANDA HOUSING PRIVATE LIMITED"
        callout="Your Vision, Our Expertise"
        description="From initial consultation to final execution, we bring professionalism, precision, and passion to every project. Let's build something extraordinary together."
      />
      <ExpertisePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        expertise={selectedExpertise}
      />
      <ConditionalFooter />
    </>
  );
}
