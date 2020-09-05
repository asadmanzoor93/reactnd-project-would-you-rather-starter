import React from 'react';

import { getUserUnansweredQuestion } from '../../helpers';
import QuestionsListing from './questionsListing';

const UnansweredQuestions = (props) => {
  const { user, questions } = props;

  return (
    <ul className="questions-list">
      <QuestionsListing questions={getUserUnansweredQuestion(user, questions)} />
    </ul>
  );
};

export default UnansweredQuestions;
