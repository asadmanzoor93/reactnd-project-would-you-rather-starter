import React from 'react';

import QuestionsListItem from './questionListItem';

const QuestionsListing = (props) => {
  const { questions } = props;

  return questions.map((question) => <QuestionsListItem question={question} />);
};

export default QuestionsListing;
