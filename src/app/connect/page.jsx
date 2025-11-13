"use client";
import "./contact.css";
import { useState } from "react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { RiFacebookBoxLine, RiInstagramLine, RiLinkedinBoxLine, RiWhatsappLine } from "react-icons/ri";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>Let's Build Your Dream Space Together</h1>
                </Copy>
              </div>
              <div className="contact-tagline">
                <Copy delay={1}>
                  <p className="lg">
                    Get in touch with us to discuss your construction, interior design, or furniture needs. We're here to bring your vision to life.
                  </p>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>Email</p>
                    <p>info@sanandahousing.com</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>Phone & WhatsApp</p>
                    <p>+91 800 388 0087</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Office Address</p>
                    <p>#36/1/29, 1st Floor</p>
                    <p>Opp Vibgyor School</p>
                    <p>24th Main Road, HSR Layout, 2nd Sector</p>
                    <p>Bengaluru, India - 560102</p>
                  </Copy>
                </div>
                <div className="contact-info-block contact-social-block">
                  <Copy delay={1.3}>
                    <p className="social-header">Connect With Us</p>
                    <div className="contact-social-links">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                        <RiFacebookBoxLine />
                        <span>Facebook</span>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <RiInstagramLine />
                        <span>Instagram</span>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <RiLinkedinBoxLine />
                        <span>LinkedIn</span>
                      </a>
                      <a href="https://wa.me/918003880087" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                        <RiWhatsappLine />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="SANADA Enterprises office"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-header">
              <Copy delay={0.1}>
                <h2>Send Us a Message</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">Fill out the form below and we'll get back to you within 24 hours.</p>
              </Copy>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="construction">Construction Services</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="furniture-design">Furniture Design</option>
                    <option value="office-interior">Office Interior Setup</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {formStatus === "success" && (
                  <p className="form-success">Thank you! We'll get back to you soon.</p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
