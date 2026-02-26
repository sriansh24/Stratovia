import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video1 from "../../assets/videos/ai-website.mp4";
import video2 from "../../assets/videos/drag-drop.mp4";
import video3 from "../../assets/videos/template.mp4";
import "../../assets/css/HomeCss/WebsiteBuild.css";

function WebsiteBuild() {
  const [activeVideo, setActiveVideo] = useState(video1);
  const [nextVideo, setNextVideo] = useState(null);
  const [fade, setFade] = useState(false);
  const [activeSection, setActiveSection] = useState("website-builder");
  const navigate = useNavigate();

  const features = [
    {
      title: "AI tools built for your business",
      desc: "Our AI tools are designed to help you create a stunning website that reflects your brand and engages your audience. With our easy-to-use interface, you can customize your website with just a few clicks.",
      video: video1,
    },
    {
      title: "Point, click, and create",
      desc: "With our intuitive drag-and-drop builder, you can create a professional website in minutes. No coding required.",
      video: video2,
    },
    {
      title: "Templates that fit your vision",
      desc: "Choose from a wide range of professionally designed templates that are perfect for any business or personal project.",
      video: video3,
    },
  ];

  const handleHover = (video) => {
    if (video === activeVideo) return;
    setNextVideo(video);
    setFade(true);

    setTimeout(() => {
      setActiveVideo(video);
      setNextVideo(null);
      setFade(false);
    }, 500);
  };

  return (
    <>
      <section className="feature-section">
        <div className="video-container">
          <video
            src={activeVideo}
            autoPlay
            loop
            muted
            playsInline
            className={`feature-video base ${fade ? "fade-out" : "fade-in"}`}
          />
          {nextVideo && (
            <video
              src={nextVideo}
              autoPlay
              loop
              muted
              playsInline
              className={`feature-video overlay ${fade ? "fade-in" : ""}`}
            />
          )}
        </div>
        <div className="feature-cards">
          {features.map((item, index) => (
            <div
              key={index}
              className="feature-card"
              onMouseEnter={() => handleHover(item.video)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="d-flex justify-content-center mb-5">
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
    </>
  );
}

export default WebsiteBuild;
