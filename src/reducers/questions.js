import {
  RECEIVE_QUESTIONS_SUCCESS,
  ANSWER_QUESTION_SUCCESS,
  ANSWER_QUESTION_FAILURE,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION_SUCCESS:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    case ANSWER_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_QUESTION_SUCCESS:
      const { id } = action;
      return {
        ...state,
        [id]: action
      };
    case ADD_QUESTION_FAILURE:
      const { payload } = action;
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
