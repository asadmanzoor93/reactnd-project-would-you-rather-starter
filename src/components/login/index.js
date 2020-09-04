import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { setAuthedUser, clearAuthedUser } from '../../actions/authedUser';

const Login = (props) => {
  const { dispatch, users } = props;
  const [userId, setUserId] = useState(null);
  const [toHome, setToHome] = useState(false);
  const { from } = props.location.state || { from: { pathname: '/dashboard' } };

  useEffect(() => {
    dispatch(clearAuthedUser());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleLogin = () => {
    dispatch(setAuthedUser(userId));
    setToHome(true);
  };

  const usersLisitng = Object.keys(users).map(function(key) {
    return (
      <option value={users[key].id} key={key}>
        {users[key].name}
      </option>
    );
  });

  if (toHome) {
    return <Redirect to={from} />;
  }

  return (
    <div className="login-block">
      <h3 className="title">Welcome To Would You Rather App</h3>
      <div className="user-select">
        <p>Please sign in to continue</p>
        <select id="login-select" value={userId ? userId : -1} onChange={handleInputChange}>
          <option value="-1" disabled>
            Select user...
          </option>
          {usersLisitng}
        </select>
      </div>

      <button className="btn" disabled={userId === null} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(Login));
