import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../container';

const MianLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default MianLayout;
