import React from "react";
import {
  Globe,
  AppWindow,
  Sparkles,
  Mail,
  FileText,
  Paperclip,
} from "lucide-react";
import PersonImage from "../../assets/img/stratovia-airo/person-w-laptop.webp";
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
        <div className="sa-layout">
          <div className="sa-card">
            <img src={PersonImage} alt="Stratovia Airo" className="img-fluid" />
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
            <div>
              <p>
                <strong>Benefits of Stratovia Airo:</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <Globe className="mr-2 sa-icon" />
                  <span className="sa-icon-text"> Domain Name</span>
                </li>
                <li>
                  <AppWindow className="mr-2 sa-icon" />
                  <span className="sa-icon-text">Online Store</span>
                </li>
                <li>
                  <Sparkles className="mr-2 sa-icon" />
                  <span className="sa-icon-text">
                    Airo<sup>TM</sup> Plus Logo
                  </span>
                </li>
                <li>
                  <Mail className="mr-2 sa-icon" />
                  <span className="sa-icon-text">Business Email</span>
                </li>
                <li>
                  <Paperclip className="mr-2 sa-icon" />
                  <span className="sa-icon-text">Conversations</span>
                </li>
                <li>
                  <FileText className="mr-2 sa-icon" />
                  <span className="sa-icon-text">Stratovia Studio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default StratoviaAiro;
