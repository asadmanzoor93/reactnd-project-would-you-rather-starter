import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION_SUCCESS,
  ANSWER_QUESTION_FAILURE,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
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
      return {
        ...state,
        [action.id]: action
      };
    case ADD_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
