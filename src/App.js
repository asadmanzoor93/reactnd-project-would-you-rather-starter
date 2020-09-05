import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import PublicRoutes from './components/routes/publicRoutes';
import { fetchInitialData } from './actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
};

export default connect()(App);
