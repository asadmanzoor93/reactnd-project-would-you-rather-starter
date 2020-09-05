import React from 'react';

import QuestionsListItem from './questionListItem';

const QuestionsListing = (props) => {
  const { questions } = props;

  return questions.map((question, index) => <QuestionsListItem key={index} question={question} />);
};

export default QuestionsListing;
