import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddAnswer } from '../../actions/questions';

const QuestionDetail = (props) => {
  const {
    dispatch,
    id,
    authedUser,
    question,
    author,
    answered,
    answer,
    votesOptionOne,
    votesOptionTwo,
    totalVotes,
    percentageOptionOne,
    percentageOptionTwo
  } = props;

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSaveAnswer = (e) => {
    e.preventDefault();

    dispatch(
      handleAddAnswer({
        qid: id,
        authedUser,
        answer: selectedAnswer
      })
    );
  };

  const chooseAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  if (!question) {
    return <Redirect to="/404" />;
  }

  return (
    <div className={answered ? 'question-detail' : 'tile-item'}>
      {answered ? (
        <h3 className="tile-header">Asked by {author.name}</h3>
      ) : (
        <h3 className="tile-header">{author.name} asks</h3>
      )}
      <div className="tile-body">
        <div className="tile-left">
          <img alt="avatar" className="avatar" src={`/${author.avatarURL}`} />
        </div>

        {!answered ? (
          <div className="question-body">
            <div className="would-you">Would you rather</div>
            <div
              className={selectedAnswer === 'optionOne' ? 'option option-selected' : 'option'}
              onClick={(e) => {
                chooseAnswer('optionOne');
              }}
            >
              {question.optionOne.text}
            </div>
            <div
              className={selectedAnswer === 'optionTwo' ? 'option option-selected' : 'option'}
              onClick={(e) => {
                chooseAnswer('optionTwo');
              }}
            >
              {question.optionTwo.text}
            </div>
            <button className={selectedAnswer ? 'btn-default' : 'disabled'} onClick={handleSaveAnswer}>
              Submit
            </button>
          </div>
        ) : (
          <div className="question-body">
            <div className="would-you">Results: </div>
            <div className={answer === 'optionOne' ? 'option-container selected' : 'option-container'}>
              <div className="option-one">{question.optionOne.text}</div>

              <div>
                {votesOptionOne} out of {totalVotes} votes
              </div>
              <div>Percentage votes: {percentageOptionOne}%</div>
              <div className="your-vote">Your pick</div>
            </div>

            <div className={answer === 'optionTwo' ? 'option-container selected' : 'option-container'}>
              <div className="option-two">{question.optionTwo.text}</div>

              <div>
                {votesOptionTwo} out of {totalVotes} votes
              </div>
              <div>Percentage votes: {percentageOptionTwo}%</div>
              <div className="your-vote">Your pick</div>
            </div>
          </div>
        )}
      </div>
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
  const votesOptionOne = question && question.optionOne.votes ? question.optionOne.votes.length : 0;
  const votesOptionTwo = question && question.optionTwo.votes ? question.optionTwo.votes.length : 0;
  const totalVotes = votesOptionOne + votesOptionTwo;
  const percentageOptionOne = ((votesOptionOne / totalVotes) * 100).toFixed(1);
  const percentageOptionTwo = ((votesOptionTwo / totalVotes) * 100).toFixed(1);
  const answer = users[authedUser].answers[id];

  return {
    id,
    authedUser,
    question,
    author,
    answered,
    answer,
    votesOptionOne,
    votesOptionTwo,
    totalVotes,
    percentageOptionOne,
    percentageOptionTwo
  };
}

export default connect(mapStateToProps)(QuestionDetail);
