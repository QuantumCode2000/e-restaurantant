import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import './Login.css';

export const LogIn = () => (
  <div className="app_login section__padding">
    <div className="app__newsletter ">
      <div className="app__newsletter-heading">
        <SubHeading title="---" />
        <h1 className="headtext__cormorant">Inicio de Sesion</h1>
        <p className="p__opensans">--</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="password" placeholder="Enter your password" />
      </div>
      <br /><br />
      <button type="button" className="custom__button">iniciar sesion</button>

    </div>
  </div>

);

export default LogIn;
