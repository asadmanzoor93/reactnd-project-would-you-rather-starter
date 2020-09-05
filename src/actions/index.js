import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { getInitialData } from '../services/api';

export const fetchInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};
