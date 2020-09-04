import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  const { user, authedUser } = props;
  const avatar = user ? user.avatarURL : 'placeholder.png';
  const name = user ? user.name : '';

  return (
    <nav className="nav">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/dashboard" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" exact activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {authedUser && (
            <li className="user-info">
              <NavLink to="/" exact activeClassName="active">
                <div className="nav-user">
                  <img src={avatar} alt={`Avatar of ${authedUser}`} className="nav-avatar" />
                  <h4>{name}</h4>
                  <span>Logout</span>
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    user: users[authedUser]
  };
}
export default connect(mapStateToProps)(Header);
