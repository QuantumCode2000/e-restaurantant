import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { MainLayout } from './layout';

const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route index path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
