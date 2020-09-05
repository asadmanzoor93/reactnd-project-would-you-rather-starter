import React from 'react';

import { getUserAnsweredQuestion } from '../../helpers';
import QuestionsListing from './questionsListing';

const AnsweredQuestions = (props) => {
  const { user, questions } = props;

  return (
    <ul className="questions-list">
      <QuestionsListing questions={getUserAnsweredQuestion(user, questions)} />
    </ul>
  );
};

export default AnsweredQuestions;
