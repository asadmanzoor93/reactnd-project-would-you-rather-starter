import { messageNotification } from '../helpers';
import { saveQuestion, saveQuestionAnswer } from '../services/api';

export const RECEIVE_QUESTIONS_SUCCESS = 'RECEIVE_QUESTIONS_SUCCESS';
export const ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS';
export const ADD_QUESTION_FAILURE = 'ADD_QUESTION_FAILURE';
export const ANSWER_QUESTION_SUCCESS = 'ANSWER_QUESTION_SUCCESS';
export const ANSWER_QUESTION_FAILURE = 'ANSWER_QUESTION_FAILURE';

function addAnswerSuccess({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION_SUCCESS,
    authedUser,
    qid,
    answer
  };
}

function addAnswerFailure(error) {
  return { type: ADD_QUESTION_FAILURE, payload: error };
}

function addQuestionSuccess({ id, timestamp, author, optionOne, optionTwo }) {
  return {
    type: ADD_QUESTION_SUCCESS,
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  };
}

function addQuestionFailure(error) {
  return { type: ANSWER_QUESTION_FAILURE, payload: error };
}

export const receiveQuestionsSuccess = (questions) => {
  return {
    type: RECEIVE_QUESTIONS_SUCCESS,
    questions
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      optionOneText,
      optionTwoText,
      author: authedUser
    };
    return saveQuestion(info)
      .then((question) => {
        dispatch(addQuestionSuccess(question));
        messageNotification('success', 'New Question Addition', 'New Question Added Successfully');
      })
      .catch((error) => {
        dispatch(addQuestionFailure(error));
        messageNotification(
          'danger',
          'There was a problem saving question. Please try again',
          error.response.data.error
        );
      });
  };
};

export const handleAddAnswer = (info) => {
  return (dispatch) => {
    dispatch(addAnswerSuccess(info));
    return saveQuestionAnswer(info)
      .then(() => {
        messageNotification('success', 'Question Answer', 'Question Answered Successfully');
      })
      .catch((error) => {
        dispatch(addAnswerFailure(error));
        messageNotification('danger', 'There was a problem saving answer', error.response.data.error);
      });
  };
};
