import React, { useState } from "react";
import Footer from "./Footer";
import SwearingOfAffidavits from "./servicesComponents/SwearingOfAffidavits";
import StatutoryDeclarations from "./servicesComponents/StatutoryDeclarations";
import CommissioningOfExhibits from "./servicesComponents/CommissioningOfExhibits";
import CertifiedTrueCopies from "./servicesComponents/CertifiedTrueCopies";

import "../styles/Services.css";

function Services() {
  const [active, setActive] = useState("Swearing");

  const onSwearingBtn = () => {
    setActive("Swearing");
  };
  const onCertifiedBtn = () => {
    setActive("Certified");
  };
  const onDeclarationsBtn = () => {
    setActive("Declarations");
  };
  const onCommisioningBtn = () => {
    setActive("Commisioning");
  };

  return (
    <div>
      <div className="container2">
        <div className="bg-image2">
          <div className="headings1">
            <h2 className="heading-small">Services</h2>
            <h1 className="heading-big">Commisioner of Oaths</h1>
          </div>
        </div>

        <div className="content-container-container">
          <div className="summary-container1">
            <h2 className="summary-header1">How We Help</h2>
            <p className="summary-text1">
              Phasellus scelerisque, nulla nec posuere aliquam, odio tellus
              consectetur massa, ut pharetra lectus dui et libero. Maecenas
              bibendum maximus mi, at imperdiet dolor semper vitae.
            </p>
          </div>
          <div className="second-nav-service-desktop-ctn">
            <div className="second-nav-ctn">
              <button
                className={`second-nav-btns  ${
                  active === "Swearing" && " selected-btn"
                }`}
                onClick={onSwearingBtn}
              >
                Swearing of Affidavits
              </button>
              <button
                className={`second-nav-btns ${
                  active === "Certified" && " selected-btn"
                }`}
                onClick={onCertifiedBtn}
              >
                Certified True Copies
              </button>
              <button
                className={`second-nav-btns ${
                  active === "Declarations" && " selected-btn"
                }`}
                onClick={onDeclarationsBtn}
              >
                Statutory Declarations
              </button>
              <button
                className={`second-nav-btns ${
                  active === "Commisioning" && " selected-btn"
                }`}
                onClick={onCommisioningBtn}
              >
                Commissioning of Exhibits
              </button>
            </div>
            <div className="info-desktop">
              {active === "Swearing" && <SwearingOfAffidavits />}
              {active === "Certified" && <CertifiedTrueCopies />}
              {active === "Declarations" && <StatutoryDeclarations />}
              {active === "Commisioning" && <CommissioningOfExhibits />}
            </div>
          </div>
          <div className="second-nav-service-mobile-ctn">
            <div className="accordion">
              <input
                type="checkbox"
                name="SwearingofAffidavits"
                id="SwearingofAffidavits"
                className="accordion__input"
              />
              <label
                className="accordion__label"
                htmlFor="SwearingofAffidavits"
              >
                Swearing of Affidavits
              </label>
              <div className="accordion__content">
                <SwearingOfAffidavits />
              </div>
            </div>
            <div className="accordion">
              <input
                type="checkbox"
                name="CertifiedTrueCopies"
                id="CertifiedTrueCopies"
                className="accordion__input"
              />
              <label className="accordion__label" htmlFor="CertifiedTrueCopies">
                Certified True Copies
              </label>
              <div className="accordion__content">
                <SwearingOfAffidavits />
              </div>
            </div>
            <div className="accordion">
              <input
                type="checkbox"
                name="StatutoryDeclarations"
                id="StatutoryDeclarations"
                className="accordion__input"
              />
              <label
                className="accordion__label"
                htmlFor="StatutoryDeclarations"
              >
                Statutory Declarations
              </label>
              <div className="accordion__content">
                <SwearingOfAffidavits />
              </div>
            </div>
            <div className="accordion">
              <input
                type="checkbox"
                name="CommissioningofExhibits"
                id="CommissioningofExhibits"
                className="accordion__input"
              />
              <label
                className="accordion__label"
                htmlFor="CommissioningofExhibits"
              >
                Commissioning of Exhibits
              </label>
              <div className="accordion__content">
                <SwearingOfAffidavits />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
