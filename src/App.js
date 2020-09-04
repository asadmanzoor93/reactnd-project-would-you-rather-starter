import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import './App.css';

import PublicRoutes from './components/routes/publicRoutes';
import { handleInitialData } from './actions/shared';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
};

export default connect()(App);
