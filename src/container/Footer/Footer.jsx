import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">+591 73273273</p>
        <p className="p__opensans">+591 73273273</p>
      </div>

      <div className="app__footer-links_logo">
        <img src="/" alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor opcion para su negocio , la mejor opcion para su restaurante.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horas de Atencion</h1>
        <p className="p__opensans">Lunes a Viernes:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sabados y Domingos:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Quantum Code. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
