import { store } from 'react-notifications-component';

export const messageNotification = (type, title, message, duration = 2000, onScreen = false) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: duration,
      onScreen: onScreen
    }
  });
};

export const getSortedUsers = (users) => {
  const users_data = Object.values(users);
  users_data.map((user) => (user.totalScore = Object.keys(user.answers).length + user.questions.length));

  return users_data.sort((user_a, user_b) => user_b.totalScore - user_a.totalScore);
};

export const getUserAnsweredQuestion = (user, questions) => {
  const answeredQuestions = Object.values(questions).filter((question) => {
    return question.optionOne.votes.indexOf(user) > -1 || question.optionTwo.votes.indexOf(user) > -1;
  });

  return answeredQuestions.sort((user_a, user_b) => user_b.timestamp - user_a.timestamp);
};

export const getUserUnansweredQuestion = (user, questions) => {
  const unAnsweredQuestions = Object.values(questions).filter((question) => {
    return question.optionOne.votes.indexOf(user) === -1 && question.optionTwo.votes.indexOf(user) === -1;
  });

  return unAnsweredQuestions.sort((user_a, user_b) => user_b.timestamp - user_a.timestamp);
};
