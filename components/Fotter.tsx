import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const Fotter = () => {
  return (
    <footer className="bg-paper-dark py-12 px-6 border-t-4 border-dashed border-sketch-border">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <h3 className="text-3xl sm:text-4xl font-handwritten font-bold text-sketch mb-4 text-center">
          Contact Us
        </h3>
        <div className="text-center text-text-primary space-y-2">
          <p className="text-base sm:text-lg">
            For Queries:{" "}
            <a
              href="mailto:innovate@inapp.com"
              className="font-semibold highlight-yellow-soft hover:text-sketch transition-colors"
            >
              innovate@inapp.com
            </a>
          </p>
          <p className="text-base sm:text-lg">
            Contact: <span className="font-medium">+91 85473 93808, +91 86061 64747</span>
          </p>
        </div>
      </div>

      <hr className="border-sketch-border border-dashed max-w-4xl mx-auto my-8" />

      {/* Follow Us Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <h3 className="text-3xl sm:text-4xl font-handwritten font-bold text-sketch mb-4 text-center">
          Follow Us
        </h3>
        <p className="text-center text-text-secondary mb-8 text-base sm:text-lg">
          Stay updated and inspired
        </p>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          {/* IEEE Kerala YP */}
          <div className="text-center">
            <p className="font-handwritten-alt font-semibold text-xl text-text-primary mb-4">
              IEEE Kerala YP
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/ieee-kerala-young-professionals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://yp.ieeekerala.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Website"
              >
                <TbWorld />
              </a>
              <a
                href="https://www.facebook.com/ypieeekerala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/ieeekeralayp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* InApp */}
          <div className="text-center">
            <p className="font-handwritten-alt font-semibold text-xl text-text-primary mb-4">
              InApp
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/inapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/inapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/InApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/inapp.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-sketch text-2xl transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-sketch-border border-dashed max-w-4xl mx-auto my-8" />

      {/* Footer Bottom */}
      <div className="text-center">
        <p className="text-sm text-text-secondary">
          InApp 2024 © All rights reserved.
        </p>
      </div>
    </footer>
  );
};
