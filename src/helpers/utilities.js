import { store } from 'react-notifications-component';

export const messageNotification = (type, title, message, duration = 5000, onScreen = true) => {
  if (typeof message === 'string') {
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
  }
};
