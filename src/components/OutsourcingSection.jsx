import React from "react";
import "./OutsourcingSection.css";
import aboutImg from "../assets/about-img.webp";
const OutsourcingSection = () => {
  return (
    <section className="outsourcing-section py-5">
      <h2 className="mb-4">
        <span>The Power of Outsourcing with </span> Bloom Business Solutions
      </h2>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <span className="section-tag">
              Dedicated Support, Skilled Team, and Smooth Operations
            </span>
            <p>
              Partnering with Bloom Business Solutions is a strategic way to
              reduce expenses, streamline workload, and maintain consistent
              quality across essential business functions. Our trained
              professionals in legal support, finance & accounting operations,
              compliance, bookkeeping, and virtual assistance provide
              dependable, flexible, and efficient support for businesses
              worldwide.
            </p>
            <p>
              Today, companies are choosing a smarter model, hiring dedicated
              remote experts rather than building large in-house teams. This
              approach is scalable, cost-friendly, and ensures steady
              performance without operational pressure.
            </p>
            <p>
              Bloom Business Solutions offers tailored outsourcing plans
              designed to fit your requirements. 
            </p>
          </div>

          <div className="col-lg-6  mt-4 mt-lg-0">
            <img src={aboutImg} alt="Outsourcing" className="img-fluid img-ab" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSection;
