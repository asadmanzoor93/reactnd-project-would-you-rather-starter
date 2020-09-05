import { RECEIVE_USERS_SUCCESS } from '../actions/users';
import { ANSWER_QUESTION_SUCCESS, ADD_QUESTION_SUCCESS } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS_SUCCESS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION_SUCCESS:
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case ADD_QUESTION_SUCCESS:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      };
    default:
      return state;
  }
}
