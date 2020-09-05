import React from 'react';

import UserListItem from './userListItem';

const UsersListing = (props) => {
  const { users_data } = props;
  return users_data.map((user, index) => <UserListItem key={index} user={user} />);
};

export default UsersListing;
