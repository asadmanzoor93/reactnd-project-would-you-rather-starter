import React from 'react';

const QuestionDetail = (props) => {
  const { question_id, question, authedUser, author, users } = props;

  const votesOptionOne = question && question.optionOne.votes ? question.optionOne.votes.length : 0;
  const votesOptionTwo = question && question.optionTwo.votes ? question.optionTwo.votes.length : 0;
  const totalVotes = votesOptionOne + votesOptionTwo;
  const percentageOptionOne = ((votesOptionOne / totalVotes) * 100).toFixed(1);
  const percentageOptionTwo = ((votesOptionTwo / totalVotes) * 100).toFixed(1);
  const answer = users[authedUser].answers[question_id];

  return (
    <div className="question-detail">
      <h3 className="tile-header">Asked by {author.name}</h3>
      <div className="tile-body">
        <div className="tile-left">
          <img alt="avatar" className="avatar" src={`${author.avatarURL}`} />
        </div>

        <div className="question-body">
          <div className="would-you">Results: </div>
          <div className={answer === 'optionOne' ? 'option-container selected' : 'option-container'}>
            <div className="option-one">
              <strong>Option 1: </strong> {question.optionOne.text}
            </div>

            <div>
              {votesOptionOne} out of {totalVotes} votes
            </div>
            <div>Percentage votes: {percentageOptionOne}%</div>
            <div className="your-vote">{answer === 'optionOne' ? 'Your Choice' : ''}</div>
          </div>

          <div className={answer === 'optionTwo' ? 'option-container selected' : 'option-container'}>
            <div className="option-two">
              <strong>Option 2: </strong> {question.optionTwo.text}
            </div>

            <div>
              {votesOptionTwo} out of {totalVotes} votes
            </div>
            <div>Percentage votes: {percentageOptionTwo}%</div>
            <div className="your-vote">{answer === 'optionTwo' ? 'Your Choice' : ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
