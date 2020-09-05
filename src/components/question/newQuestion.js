import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../../actions/questions';

const NewQuestion = (props) => {
  const { dispatch } = props;
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    field === 'option1' ? setOptionOneText(value) : setOptionTwoText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    setOptionOneText('');
    setOptionTwoText('');
    setRedirectDashboard(true);
  };

  if (redirectDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="tile-item new-question">
      <h3 className="tile-header">Create New Question</h3>
      <form onSubmit={handleSubmit}>
        <div className="would-you">Would you rather...</div>
        <input
          name="optionOneText"
          type="text"
          placeholder="Enter Option One Text Here"
          value={optionOneText}
          onChange={(e) => handleInputChange(e, 'option1')}
        />
        <div className="or">Or</div>
        <input
          name="optionTwoText"
          type="text"
          placeholder="Enter Option Two Text Here"
          value={optionTwoText}
          onChange={(e) => handleInputChange(e, 'option2')}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
