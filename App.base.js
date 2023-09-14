import axios from 'axios';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';

import NotFound from './components/NotFound';


import './App.css';

function App() {

  return (
    <>
      <Header />

      <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
