"use client";
import "./spaces.css";
import { spacesData } from "./spaces.js";
import { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const spacesRef = useRef(null);
  const scrollTriggerInstances = useRef([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredSpaces, setFilteredSpaces] = useState(spacesData);

  const cleanupScrollTriggers = () => {
    scrollTriggerInstances.current.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances.current = [];
  };

  const setupAnimations = () => {
    cleanupScrollTriggers();

    if (!spacesRef.current) return;

    const spaces = spacesRef.current.querySelectorAll(".space");
    if (spaces.length === 0) return;

    spaces.forEach((space, index) => {
      gsap.set(space, {
        opacity: 0,
        scale: 0.95,
        y: 30,
      });

      // Animate all spaces immediately with stagger
      gsap.to(space, {
        duration: 0.6,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 0.2 + (index * 0.1),
      });
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setupAnimations();

    const handleResize = () => {
      setupAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupScrollTriggers();
    };
  }, [filteredSpaces]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);

    if (category === "All") {
      setFilteredSpaces(spacesData);
    } else {
      const filtered = spacesData.filter(
        (space) => space.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredSpaces(filtered);
    }
  };

  return (
    <>
      <Nav />
      <div className="page spaces">
        <section className="spaces-header">
          <div className="container">
            <div className="prop-col"></div>
            <div className="prop-col">
              <Copy delay={1}>
                <h1>Timeless Spaces</h1>
              </Copy>
              <div className="prop-filters">
                <div
                  className={`filter ${activeFilter === "All" ? "default" : ""}`}
                  onClick={() => handleFilterClick("All")}
                >
                  <Copy delay={1}>
                    <p className="lg">All</p>
                  </Copy>
                </div>
                <div
                  className={`filter ${activeFilter === "Residential" ? "default" : ""}`}
                  onClick={() => handleFilterClick("Residential")}
                >
                  <Copy delay={1.1}>
                    <p className="lg">Residential</p>
                  </Copy>
                </div>
                <div
                  className={`filter ${activeFilter === "Commercial" ? "default" : ""}`}
                  onClick={() => handleFilterClick("Commercial")}
                >
                  <Copy delay={1.2}>
                    <p className="lg">Commercial</p>
                  </Copy>
                </div>
                <div
                  className={`filter ${activeFilter === "Hospitality" ? "default" : ""}`}
                  onClick={() => handleFilterClick("Hospitality")}
                >
                  <Copy delay={1.3}>
                    <p className="lg">Hospitality</p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="spaces-list">
          <div className="container" ref={spacesRef}>
            {filteredSpaces.map((space, index) => (
              <div
                key={space.id}
                className="space"
              >
                <div className="space-img">
                  <img src={space.image} alt={space.name} />
                </div>
                <div className="space-info">
                  <div className="prop-info-col">
                    <div className="prop-date">
                      <p>{space.date}</p>
                    </div>
                  </div>
                  <div className="prop-info-col">
                    <div className="prop-info-sub-col">
                      <div className="prop-name">
                        <h3>{space.name}</h3>
                        <p className="lg">{space.location}</p>
                      </div>
                    </div>
                    <div className="prop-info-sub-col">
                      <div className="prop-client">
                        <div className="prop-client-img">
                          <img src={space.clientImage} alt={space.clientName} />
                        </div>
                        <div className="prop-client-name">
                          <p>{space.clientName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
