import React from 'react';
import profile from '../../src/assets/img/profile.jpg';

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center">
      <img src={profile} alt="Esa Juniarto" width={200} className="rounded-circle img-thumbnail" />
      <h1 className="display-4">Esa Juniarto</h1>
      <p className="lead">Programmer</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity={1}
          d="M0,192L34.3,170.7C68.6,149,137,107,206,122.7C274.3,139,343,213,411,218.7C480,224,549,160,617,144C685.7,128,754,160,823,186.7C891.4,213,960,235,1029,234.7C1097.1,235,1166,213,1234,176C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Jumbotron;
