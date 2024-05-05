import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (44)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Hello everyone, my name is Nishchal Vyas. Aspiring Software Engineer
          with a passion for developing and implementing innovative software
          solutions. Proficient in JavaScript, React, MongoDB, Express.js,
          Node.js, C/C++, JAVA, HTML, and CSS, with a keen interest in mastering
          the MERN (MongoDB, Express.js, React, Node.js) stack. Eager to gain
          hands-on experience in authentication, authorization, and role-based
          access functionality. A dedicated learner committed to delivering
          well-crafted code and actively contributing to collaborative
          problem-solving. Enthusiastic about embarking on a career in software
          development, ready to tackle challenges and contribute to impactful
          projects.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
