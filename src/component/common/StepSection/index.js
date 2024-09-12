import React from "react";

const StepSection = () => {
  return (
    <div className="timeline">
      {/* PHASE A */}
      <div className="phase">Phase A</div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>A1: Specifications & Planning</h3>
          <p>
            We help you explore the best way forward with our structured
            approach to kick off your product development.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>A2: Designs, Wireframes & Prototypes</h3>
          <p>
            Build sketches and wireframes to visualize your app. Our team helps
            you craft a strong visual identity for the product.
          </p>
          <div className="buttons">
            <button>See Wireframe</button>
            <button>View Prototype</button>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>A3: Estimates & Timeline</h3>
          <p>
            We create an estimated timeline for each task and finalize the
            scope.
          </p>
        </div>
      </div>

      {/* PHASE B */}
      <div className="phase">Phase B</div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>B1: Build</h3>
          <p>
            Our engineers start to turn wireframes into reality with a focus on
            clean and scalable code.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>B2: Test</h3>
          <p>
            We rigorously test the product to ensure that everything works as
            expected.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>B3: Deploy</h3>
          <p>
            Your app is deployed, and we monitor it in real-time to make sure it
            runs smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
