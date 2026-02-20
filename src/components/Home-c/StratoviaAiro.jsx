import React from "react";
import {
  Globe,
  AppWindow,
  Sparkles,
  Mail,
  FileText,
  Paperclip,
} from "lucide-react";
import bgimage from "../../assets/img/stratovia-airo/person-w-laptop2.webp";
import stratoviai from "../../assets/img/stratovia-airo/stratovia-ai.jpg";
import "../../assets/css/HomeCss/StratoviaAiro.css";

function StratoviaAiro() {
  return (
    <>
      <section className="stratovia-airo">
        <div className="mt-5 sa-header">
          <h2 className="text-center">
            Stratovia Airo<sup>TM</sup>{" "}
          </h2>
        </div>
        <div className="position-relative">
          <div className="sa-card">
            <img src={bgimage} alt="Stratovia Airo" className="img-fluid" />
          </div>
          <div className="sa-card-light">
            <h3 className="text-center">Turn Your Idea Into a Real Website</h3>
            <p>
              Stratovia Airo is a modern digital brand built on innovation,
              creativity, and future-ready technology. It represents the idea of
              rising above the ordinary — combining strategic thinking
              (“Stratovia”) with limitless elevation and freedom (“Airo”). The
              vision behind Stratovia Airo is to craft premium digital
              experiences, smart solutions, and impactful designs that help
              businesses stand out in a fast-moving digital world. More than
              just a name, Stratovia Airo symbolizes growth, clarity, and
              forward movement — a brand focused on building elegant,
              high-performance products and meaningful user experiences.
            </p>
            <p>
              <strong>Benefits of Stratovia Airo:</strong>
            </p>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <ul className="list-unstyled">
                  <li>
                    <Globe className="mr-2 sa-icon" /> Global Domain Name
                  </li>
                  <li>
                    <AppWindow className="mr-2 sa-icon" /> Online Store
                  </li>
                  <li>
                    <Sparkles className="mr-2 sa-icon" /> Airo<sup>TM</sup> Plus
                    Logo
                  </li>
                  <li>
                    <Mail className="mr-2 sa-icon" /> Business Email
                  </li>
                  <li>
                    <Paperclip className="mr-2 sa-icon" /> Conversations
                  </li>
                  <li>
                    <FileText className="mr-2 sa-icon" /> Stratovia Studio
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  src={stratoviai}
                  alt="Stratovia Airo Benefits"
                  style={{ width: "300px", height: "auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default StratoviaAiro;
