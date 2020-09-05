import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION_SUCCESS, ADD_QUESTION_SUCCESS } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.id])
        }
      };
    default:
      return state;
  }
}
