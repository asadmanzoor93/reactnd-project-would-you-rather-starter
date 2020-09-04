import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Question from '../question/index';

const Dashboard = (props) => {
  const { questions, authedUser } = props;
  const [hidden, setHidden] = useState(false);

  const filteredQuestions = Object.values(questions).filter((question) => {
    const contains =
      question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1;
    return hidden ? contains : !contains;
  });

  const questionsListing = filteredQuestions
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((question) => (
      <li key={question.id}>
        <Link to={`question/${question['id']}`}>
          <Question id={question.id} />
        </Link>
      </li>
    ));

  return (
    <div className="container-small">
      <div className="btn-group">
        <button className={!hidden ? 'btn-selected' : 'btn-default'} onClick={(e) => setHidden(false)}>
          Unanswered Questions
        </button>
        <button className={hidden ? 'btn-selected' : 'btn-default'} onClick={(e) => setHidden(true)}>
          Answered Questions
        </button>
      </div>

      <ul className="questions-list">{questionsListing}</ul>
    </div>
  );
};

function mapStateToProps({ questions, authedUser }) {
  return {
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(Dashboard);
