import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Contratanos" />
      <h1 className="headtext__cormorant">Contrata nuestros servicios</h1>
      <p className="p__opensans">--!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Contactarnos</button>
    </div>
  </div>
);

export default Newsletter;
