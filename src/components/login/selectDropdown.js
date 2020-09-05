import React from 'react';

const SelectDropdown = (props) => {
  const { userId, users, handleInputChange, userSelected } = props;

  const options = Object.keys(users).map(function(username) {
    return (
      <option key={username} value={users[username].id}>
        {users[username].name}
      </option>
    );
  });

  return (
    <select id="login-select" value={userSelected} onChange={handleInputChange}>
      <option value="-1" disabled>
        Select User
      </option>
      {options}
    </select>
  );
};

export default SelectDropdown;
