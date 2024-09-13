import React, { useState } from "react";
import { Collapse } from "react-collapse";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Who owns the legal rights to the technology developed by a dignite studios developer?",
      answer:
        "The legal rights to the technology produced by Dignite Studios developers are owned by the client. All development done by our firm is the client's sole property.",
    },
    {
      question:
        "Who owns the legal rights to the technology developed by a dignite studios developer?",
      answer:
        "The legal rights to the technology produced by Dignite Studios developers are owned by the client. All development done by our firm is the client's sole property.",
    },
    {
      question:
        "Who owns the legal rights to the technology developed by a dignite studios developer?",
      answer:
        "The legal rights to the technology produced by Dignite Studios developers are owned by the client. All development done by our firm is the client's sole property.",
    },
    {
      question:
        "Who owns the legal rights to the technology developed by a dignite studios developer?",
      answer:
        "The legal rights to the technology produced by Dignite Studios developers are owned by the client. All development done by our firm is the client's sole property.",
    },
    {
      question:
        "Who owns the legal rights to the technology developed by a dignite studios developer?",
      answer:
        "The legal rights to the technology produced by Dignite Studios developers are owned by the client. All development done by our firm is the client's sole property.",
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h2 onClick={() => toggle(index)} style={{ cursor: "pointer" }}>
            {item.question}
          </h2>
          <Collapse isOpened={open === index}>
            <p>{item.answer}</p>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
