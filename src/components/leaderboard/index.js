import React from 'react';
import { connect } from 'react-redux';

import UsersListing from './usersListing';
import { getSortedUsers } from '../../helpers';

const Leaderboard = (props) => {
  const { users } = props;
  return (
    <ul className="users-list">
      <UsersListing users_data={getSortedUsers(users)} />
    </ul>
  );
};

function mapStateToProps({ users }) {
  return {
    users: users
  };
}

export default connect(mapStateToProps)(Leaderboard);
