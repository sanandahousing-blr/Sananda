"use client";
import "./ExpertisePopup.css";
import { useEffect, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";

const ExpertisePopup = ({ isOpen, onClose, expertise }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Save current scroll position
    const scrollY = window.scrollY;

    // Just hide overflow, don't use fixed positioning
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.dataset.scrollY = scrollY.toString();

    return () => {
      // Restore scrolling
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // Restore scroll position
      const savedScrollY = document.body.dataset.scrollY;
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY));
        delete document.body.dataset.scrollY;
      }
    };
  }, [isOpen]);

  if (!isOpen || !expertise) return null;

  return (
    <div className="expertise-popup-overlay" onClick={onClose} ref={overlayRef}>
      <div className="expertise-popup" onClick={(e) => e.stopPropagation()}>
        <button className="expertise-popup-close" onClick={onClose} aria-label="Close">
          <RiCloseLine />
        </button>

        <div className="expertise-popup-content" ref={contentRef} data-lenis-prevent>
          <div className="expertise-popup-header">
            <div className="expertise-popup-icon">{expertise.icon}</div>
            <h2>{expertise.title}</h2>
            <p className="expertise-popup-subtitle">{expertise.subtitle}</p>
          </div>

          <div className="expertise-popup-body">
            <div className="expertise-popup-description">
              <p>{expertise.description}</p>
            </div>

            <div className="expertise-popup-features">
              <h3>What We Offer</h3>
              <ul>
                {expertise.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {expertise.process && (
              <div className="expertise-popup-process">
                <h3>Our Process</h3>
                <div className="process-steps">
                  {expertise.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisePopup;
