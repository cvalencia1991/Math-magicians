import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Navbar';
import Calculatorscren from './Pages/Calulatorscreen';
import Quote from './Pages/quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculatorscren />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
