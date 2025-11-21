"use client";
import "./ExpertisePopup.css";
import { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const ExpertisePopup = ({ isOpen, onClose, expertise }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !expertise) return null;

  return (
    <div className="expertise-popup-overlay" onClick={onClose}>
      <div className="expertise-popup" onClick={(e) => e.stopPropagation()}>
        <button className="expertise-popup-close" onClick={onClose} aria-label="Close">
          <RiCloseLine />
        </button>

        <div className="expertise-popup-content">
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
