import React from 'react';
import { Link } from 'react-router-dom';

import Question from '../question/index';

const QuestionsListItem = (props) => {
  const { question } = props;

  return (
    <li key={question.id}>
      <Link to={`question/${question['id']}`}>
        <Question id={question.id} />
      </Link>
    </li>
  );
};

export default QuestionsListItem;
