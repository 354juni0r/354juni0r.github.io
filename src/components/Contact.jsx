import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nama Lengkap
                </label>
                <input type="text" className="form-control" id="name" aria-describedby="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="form-label">
                  Pesan
                </label>
                <textarea className="form-control" id="pesan" rows={3} defaultValue={''} />
              </div>

              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fillOpacity={1}
          d="M0,64L34.3,85.3C68.6,107,137,149,206,181.3C274.3,213,343,235,411,208C480,181,549,107,617,90.7C685.7,75,754,117,823,133.3C891.4,149,960,139,1029,133.3C1097.1,128,1166,128,1234,133.3C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Contact;
