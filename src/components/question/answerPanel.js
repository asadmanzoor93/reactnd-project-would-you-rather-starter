import React, { useState } from 'react';

import { handleAddAnswer } from '../../actions/questions';

const AnswerPanel = (props) => {
  const { question_id, author, authedUser, question, dispatch } = props;
  const [optionSelected, setOptionSelected] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (optionSelected === '') {
      alert('Please choose the best option!');
    } else {
      dispatch(
        handleAddAnswer({
          qid: question_id,
          authedUser,
          answer: optionSelected
        })
      );
    }
  };

  const handleOptionSelect = (answer) => {
    setOptionSelected(answer);
  };

  return (
    <div className="tile-item">
      <h3 className="tile-header">{author.name} asks</h3>
      <div className="tile-body">
        <div className="tile-left">
          <img alt="avatar" className="avatar" src={`/${author.avatarURL}`} />
        </div>

        <div className="question-body">
          <div className="would-you">Would you rather</div>
          <div
            className={optionSelected === 'optionOne' ? 'option option-selected' : 'option'}
            onClick={(e) => {
              handleOptionSelect('optionOne');
            }}
          >
            <strong>Option 1: </strong> {question.optionOne.text}
          </div>
          <div
            className={optionSelected === 'optionTwo' ? 'option option-selected' : 'option'}
            onClick={(e) => {
              handleOptionSelect('optionTwo');
            }}
          >
            <strong>Option 2: </strong> {question.optionTwo.text}
          </div>
          <button className={optionSelected ? 'btn-default' : 'disabled'} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerPanel;
