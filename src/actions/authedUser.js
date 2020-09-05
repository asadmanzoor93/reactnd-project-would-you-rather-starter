export const SET_AUTHED_USER = 'SET_AUTHED_USER_SUCCESS';
export const CLEAR_AUTHED_USER = 'CLEAR_AUTHED_USER_SUCCESS';

export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id
  };
};

export const clearAuthedUser = () => {
  return {
    type: CLEAR_AUTHED_USER
  };
};
