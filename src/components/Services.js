import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swearing from "./servicesComponents/SwearingOfAffidavits";
import Certified from "./servicesComponents/CertifiedTrueCopies";
import "../styles/Services.css";

function Services() {
  const [active, setActive] = useState("Swearing");
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
          <div>
            <button>Swearing of Affidavits</button>
            <button>Certified True Copies</button>
            <button>Statutory Declarations</button>
            <button>Commissioning of Exhibits</button>
          </div>
          <div>
            {active === "Swearing" && <Swearing />}
            {active === "Certified" && <Certified />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
