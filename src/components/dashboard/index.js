import React, { useState } from 'react';
import { connect } from 'react-redux';

import AnsweredQuestions from './answeredQuestions';
import UnansweredQuestions from './unansweredQuestions';

const Dashboard = (props) => {
  const { authedUser, questions } = props;
  const [showAnsweredTab, setShowAnsweredTab] = useState(false);

  return (
    <div className="container-small">
      <div className="btn-group">
        <button
          className={!showAnsweredTab ? 'btn-selected' : 'btn-default'}
          onClick={(e) => setShowAnsweredTab(false)}
        >
          Unanswered Questions
        </button>
        <button className={showAnsweredTab ? 'btn-selected' : 'btn-default'} onClick={(e) => setShowAnsweredTab(true)}>
          Answered Questions
        </button>
      </div>

      {showAnsweredTab ? (
        <AnsweredQuestions user={authedUser} questions={questions} />
      ) : (
        <UnansweredQuestions user={authedUser} questions={questions} />
      )}
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
