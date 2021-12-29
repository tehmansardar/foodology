import ACTIONS from './index';

export const dispatchAlert = () => {
  return {
    type: ACTIONS.ALERT,
  };
};

export const dispatchAlertClose = () => {
  return {
    type: ACTIONS.ALERT_CLOSE,
  };
};
