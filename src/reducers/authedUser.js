import { SET_AUTHED_USER_SUCCESS, CLEAR_AUTHED_USER_SUCCESS } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  switch (action.type) {
    case CLEAR_AUTHED_USER_SUCCESS:
      return null;
    case SET_AUTHED_USER_SUCCESS:
      return action.id;
    default:
      return state;
  }
}
