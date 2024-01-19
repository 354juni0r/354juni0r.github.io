import React from 'react';
import Logo1 from '../../src/assets/img/Logo1.png';

const Footer = () => {
  return (
    <footer className="text-white bg-primary">
      <div className="row justify-content-between ms-3 me-3">
        <div className="col-md-4">
          <div className="footer_lbox">
            <img src={Logo1} alt="logo" />
            <p>© 2023 Esa Juniarto. All Rights Reserved.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="time_title" id="sec">
                SERVER TIME
              </div>
              <div className="time_date" id="tgl">
                01. January. 2024 (IDN)
              </div>
            </div>
            <div className="col-md-6">
              <div className="time_num" id="jam">
                00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
