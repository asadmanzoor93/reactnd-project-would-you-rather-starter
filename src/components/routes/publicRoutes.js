import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Header from '../header';
import Login from '../login';
import ProtectedRoute from '../routes/protectedRoute';
import Page404 from '../404/Page404';
import Dashboard from '../dashboard';
import Leaderboard from '../leaderboard';
import NewQuestion from '../question/newQuestion';
import QuestionPoll from '../question/questionPoll';

const PublicRoutes = () => {
  return (
    <Fragment>
      <ReactNotification />
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/add" exact component={NewQuestion} />
          <ProtectedRoute path="/question/:id" component={QuestionPoll} />
          <ProtectedRoute path="/leaderboard" component={Leaderboard} />
          <Route path="/404" component={Page404} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default PublicRoutes;
