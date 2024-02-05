import React from "react";
import CV from "../../Assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="CTA">
      <a href={CV} download>
        Download
      </a>
      <a href="#contact"> Let's Talk</a>
    </div>
  );
};

export default CTA;
