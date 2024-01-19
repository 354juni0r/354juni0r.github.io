import React from 'react';
import Projects1 from '../../src/assets/img/projects1.jpg';
import Projects2 from '../../src/assets/img/projects2.jpg';
import Projects3 from '../../src/assets/img/projects3.jpg';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={Projects1} className="card-img-top" alt="Projects 1" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={Projects2} className="card-img-top" alt="Projects 2" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src={Projects3} className="card-img-top" alt="Projects 3" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity={1}
          d="M0,128L34.3,106.7C68.6,85,137,43,206,37.3C274.3,32,343,64,411,101.3C480,139,549,181,617,181.3C685.7,181,754,139,823,106.7C891.4,75,960,53,1029,58.7C1097.1,64,1166,96,1234,112C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Projects;
