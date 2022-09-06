import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Habla con nosotros</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">puedes comunicarte y despejar tus dudas</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Por:</p>
        <p className="p__opensans">Redes Sociales</p>
        <p className="p__opensans">Numeros de Telefono</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Contactanos por correo</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
