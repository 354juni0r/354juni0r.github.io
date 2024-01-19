import React from 'react';
import MenuData from '../data/MenuData';
import { Link } from 'react-router-dom';
import Logo1 from '../../src/assets/img/Logo1.png';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={Logo1} alt="logo" width={30} className="d-inline-block align-text-top" />
          Esa Juniarto
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {MenuData.map((data, id) => (
              <li key={id} className="nav-item">
                <a href={data.to} className="nav-link">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
