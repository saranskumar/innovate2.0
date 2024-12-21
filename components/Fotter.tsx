import React from "react";

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const Fotter = () => {
  return (
    <footer
      style={{
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      {/* Contact Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </h3>
        <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
          For Queries:{" "}
          <a
            href="mailto:innovate@inapp.com"
            style={{ color: "#ff4a4a", textDecoration: "none" }}
          >
            innovate@inapp.com
          </a>
        </p>
        <p style={{ fontSize: "1rem" }}>Phone: +91 XXXXX XXXXX</p>
      </div>

      <hr style={{ borderColor: "#444", margin: "20px 0" }} />

      {/* Follow Us Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Follow Us
        </h3>
        <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
          Stay updated and inspired:
        </p>

        {/* Social Media Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* IEEE Kerala YP */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
              IEEE Kerala YP
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* InApp */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>InApp</p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "#444", margin: "20px 0" }} />

      {/* Footer Bottom */}
      <div>
        <p style={{ fontSize: "0.9rem", color: "#777" }}>
          InApp 2024 © All rights reserved.
        </p>
      </div>
    </footer>
  );
};
