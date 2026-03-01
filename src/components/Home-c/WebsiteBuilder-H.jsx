import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Customize from "../../assets/img/website-builder-h/customize.webp";
import CreateContent from "../../assets/img/website-builder-h/create-content.webp";
import Store from "../../assets/img/website-builder-h/store.webp";
import TrackBuisness from "../../assets/img/website-builder-h/track-business.webp";
import "../../assets/css/HomeCss/WebsiteBuilder-H.css";

function WebsiteBuilderH() {
  const [activeSection, setActiveSection] = useState("website-builder");
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Customize",
      desc: "Click to easily edit or add entire sections like a photo gallery, menu, or price list in seconds, from any device.",
      image: Customize,
    },
    {
      id: 2,
      title: "Create Content",
      desc: "Design beautifully branded content for social media, email marketing and beyond using Stratovia Studio.",
      image: CreateContent,
    },
    {
      id: 3,
      title: "Add a Store",
      desc: "Set up your online shop for free using professional ecommerce templates, then upgrade to a paid plan to start selling.",
      image: Store,
    },
    {
      id: 4,
      title: "Track Your Business",
      desc: "Track analytics, manage orders and customers from one single dashboard.",
      image: TrackBuisness,
    },
  ];

  const defaultImage = features[0].image;
  const [activeId, setActiveId] = useState(1);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const activeItem = features.find((item) => item.id === activeId) || null;
  const toggleItem = (id) => {
    setIsUserInteracted(true);
    setActiveId((prev) => (prev === id ? null : id));
  };
  const [displayImage, setDisplayImage] = useState(features[0].image);
  const [fade, setFade] = useState(true);
  const bodyRefs = useRef({});

  useLayoutEffect(() => {
    Object.entries(bodyRefs.current).forEach(([key, el]) => {
      if (!el) return;
      const parent = el.parentElement;
      if (Number(key) === activeId) {
        parent.style.maxHeight = el.offsetHeight + "px";
      } else {
        parent.style.maxHeight = "0px";
      }
    });
  }, [activeId]);

  useEffect(() => {
    if (activeId === null) return;
    const newFeature = features.find((item) => item.id === activeId);
    if (!newFeature) return;
    setFade(false);
    const timer = setTimeout(() => {
      setDisplayImage(newFeature.image);
      setFade(true);
    }, 220);
    return () => clearTimeout(timer);
  }, [activeId]);

  useEffect(() => {
    if (isUserInteracted) return;
    const interval = setInterval(() => {
        setActiveId((prev) => {
            const currentIndex = features.findIndex(item => item.id ===prev);
            const nextIndex = (currentIndex +1) % features.length;
            return features[nextIndex].id;
        });
    }, 4000);
    return () => clearInterval(interval);
  }, [isUserInteracted]);

  return (
    <>
      <section className="builder-section">
        <div className="builder-content">
          <h2 className="builder-title">
            A powerful Website Builder At Your Fingertips
          </h2>
          <div className="accordion">
            {features.map((item) => (
              <div
                key={item.id}
                className={`accordion-item ${activeId === item.id ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className={`icon ${activeId === item.id ? "open" : ""}`}>
                    <FaPlus />
                  </div>
                  <span className="accordion-title">{item.title}</span>
                </div>
                <div className="my-custom-accordion">
                  <div
                    className="accordion-inner"
                    ref={(el) => (bodyRefs.current[item.id] = el)}
                  >
                    <p className="accordion-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className={`btn px-4 py-2 ${activeSection === "website-builder" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => {
              setActiveSection("website-builder");
              navigate("/website-builder");
            }}
          >
            Start for free &#8594;
          </button>
        </div>
        <div className="builder-image">
          <img
            src={displayImage}
            alt="preview"
            className={`preview-image ${fade ? "show" : "hide"}`}
          />
        </div>
      </section>
    </>
  );
}
export default WebsiteBuilderH;
