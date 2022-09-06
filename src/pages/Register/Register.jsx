import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import './Register.css';

const Register = () => (
  <div className="app_login section__padding">
    <div className="app__newsletter ">
      <div className="app__newsletter-heading">
        <SubHeading title="---" />
        <h1 className="headtext__cormorant">Registro</h1>
        <p className="p__opensans">--</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <p className="p__opensans">Name:&nbsp;</p>
        <input type="name" placeholder="Name" />
      </div>
      <div className="app__newsletter-input flex__center">
        <p className="p__opensans">Last Name:&nbsp;</p>
        <input type="name" placeholder="Last Name" />
      </div>
      <div className="app__newsletter-input flex__center">
        <p className="p__opensans">Email:&nbsp;</p>
        <input type="email" placeholder="Email  " />
      </div>
      <br /><br />
      <p className="p__opensans">Password: </p>
      <div className="app__newsletter-input flex__center">
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="password" placeholder="Verify your password" />
      </div>
      <br /><br />
      <button type="button" className="custom__button">Registrarse</button>

    </div>
  </div>

);

export default Register;


