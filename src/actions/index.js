import { receiveQuestionsSuccess } from './questions';
import { receiveUsersSuccess } from './users';
import { getInitialData } from '../services/api';

export const fetchInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestionsSuccess(questions));
      dispatch(receiveUsersSuccess(users));
    });
  };
};
