import { saveQuestion, saveQuestionAnswer } from '../services/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
  return {
    type: ADD_QUESTION,
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    const questionInfo = {
      optionOneText,
      optionTwoText,
      author: authedUser
    };

    //dispatching this here and not after api success cause of frequent error in creating question
    //dispatch(addQuestion(formatNewQuestion(questionInfo)))

    return saveQuestion(questionInfo)
      .then((question) => {
        // eslint-disable-next-line no-console
        console.log('created QUESTION', question);
        dispatch(addQuestion(question));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('There was a problem saving question.');
        alert('There was a problem creating new question. Try again ');
      });
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    //assuming answer gets updated correctly
    dispatch(addAnswer(info));
    return (
      saveQuestionAnswer(info)
        // eslint-disable-next-line no-console
        .then(() => console.log('recorded answer'))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('There was a problem saving question.');
        })
    );
  };
}
