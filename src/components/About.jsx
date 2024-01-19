import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center fs-5 text-center">
          <div className="col-md-4 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime at reiciendis fugiat aliquid? Cum enim tenetur, laudantium at alias consectetur corporis. Aut.</div>
          <div className="col-md-4 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae saepe quia et adipisci repellendus aliquam fugiat explicabo corrupti voluptate, obcaecati, sunt facere.</div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fillOpacity={1}
          d="M0,256L34.3,250.7C68.6,245,137,235,206,224C274.3,213,343,203,411,192C480,181,549,171,617,144C685.7,117,754,75,823,96C891.4,117,960,203,1029,224C1097.1,245,1166,203,1234,192C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default About;
