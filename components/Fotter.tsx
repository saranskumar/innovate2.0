import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const Fotter = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      {/* Main Grid: Contact Us and Follow Us */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 text-center md:text-left">
              Contact Us
            </h3>
            <div className="text-center md:text-left text-text-primary space-y-2">
              <p className="text-base sm:text-lg">
                For Queries:{" "}
                <a
                  href="mailto:innovate@inapp.com"
                  className="font-semibold hover:text-primary transition-colors"
                >
                  innovate@inapp.com
                </a>
              </p>
              <p className="text-base sm:text-lg">
                Contact: <span className="font-medium">+91 00000 00000</span>
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 text-center">
              Follow Us
            </h3>
            <p className="text-center text-text-secondary mb-6 text-base sm:text-lg">
              Stay updated and inspired
            </p>

            {/* Social Media Links - Grid Layout with Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* IEEE Kerala YP Card */}
              <div className="card p-6">
                <p className="font-semibold text-lg text-text-primary mb-4 text-center">
                  IEEE Kerala YP
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/company/ieee-kerala-young-professionals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://yp.ieeekerala.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Website"
                  >
                    <TbWorld />
                  </a>
                  <a
                    href="https://www.facebook.com/ypieeekerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/ieeekeralayp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* InApp Card */}
              <div className="card p-6">
                <p className="font-semibold text-lg text-text-primary mb-4 text-center">
                  InApp
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/company/inapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/inapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/InApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/inapp.inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary text-2xl transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border max-w-4xl mx-auto my-8" />

      {/* Footer Bottom */}
      <div className="text-center">
        <p className="text-sm text-text-secondary">
          InApp 2024 © All rights reserved.
        </p>
      </div>
    </footer >
  );
};
