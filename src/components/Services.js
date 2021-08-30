import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <div className="second-nav-ctn">
            <button
              className={`second-nav-btns ${
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
          <div>
            {active === "Swearing" && <SwearingOfAffidavits />}
            {active === "Certified" && <CertifiedTrueCopies />}
            {active === "Declarations" && <StatutoryDeclarations />}
            {active === "Commisioning" && <CommissioningOfExhibits />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
