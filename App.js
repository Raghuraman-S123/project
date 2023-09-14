import axios from 'axios';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import VendorHome from './components/vendor/VendorHome';
import DesignerHome from './components/designer/DesignerHome';
import DesignDetail from './components/DesignDetail';
import AddDesign from './components/designer/AddDesign';
import Footer from './components/Footer';

import NotFound from './components/NotFound';
import CurrentUserContext from './contexts/CurrentUserContext';

import './App.css';
import Register from './components/Register';

function App() {
  // const [items, setItems] = useState([]);
  // const [currentUser, setCurrentUser] = useState( {} );

  // useEffect(() => {
  //   axios.get('/api/items')
  //     .then((result) => setItems(result.data))
  //     .catch(console.error);
  // }, []);

  // useEffect(() => {
  //   axios.get('api/auth/current-user')
  //     .then((result) => setCurrentUser(result.data))
  //     .then(localStorage.setItem('account-type', 'vendor'))
  //     .catch(console.error);
  // }, []);

  // const currentUserContextValue = useMemo(
  //   () => ({ currentUser, setCurrentUser }),
  //   [currentUser],
  // );

  return (
    <>
      <Header />

      <Router>
        {/* <CurrentUserContext.Provider value={currentUserContextValue}> */}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/designer' element={<DesignerHome />} />
            <Route path='/vendor' element={<VendorHome />} />
            <Route path='/design-detail' element={<DesignDetail />} />
            <Route path='/add-design' element={<AddDesign />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        {/* </CurrentUserContext.Provider> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;
