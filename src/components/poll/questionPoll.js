import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AnswerPanel from './answerPanel';
import QuestionDetail from './questionDetail';

const QuestionPoll = (props) => {
  const { dispatch, id, users, authedUser, question, author, answered } = props;

  if (!question) {
    return <Redirect to="/404" />;
  }

  return (
    <div className={answered ? 'question-detail' : 'tile-item'}>
      {answered ? (
        <QuestionDetail question_id={id} question={question} authedUser={authedUser} author={author} users={users} />
      ) : (
        <AnswerPanel dispatch={dispatch} question_id={id} author={author} authedUser={authedUser} question={question} />
      )}
    </div>
  );
};

function mapStateToProps({ authedUser, users, questions }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const answered = question
    ? question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1
    : false;

  return {
    id,
    users,
    authedUser,
    question,
    author,
    answered
  };
}

export default connect(mapStateToProps)(QuestionPoll);
