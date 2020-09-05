import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { setAuthedUser, clearAuthedUser } from '../../actions/authedUser';
import SelectDropdown from './selectDropdown';

const Login = (props) => {
  const { dispatch, users } = props;
  const [userId, setUserId] = useState(null);
  const [toHome, setToHome] = useState(false);

  const { from } = props.location.state || { from: { pathname: '/dashboard' } };
  const userSelected = userId ? userId : -1;

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

  if (toHome) {
    return <Redirect to={from} />;
  }

  return (
    <div className="login-block login-div">
      <h3 className="title app-title">Welcome To Would You Rather App</h3>
      <div className="user-select select-dropdown">
        <p>Please sign in to continue</p>
        <SelectDropdown users={users} userSelected={userSelected} handleInputChange={handleInputChange} />
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
