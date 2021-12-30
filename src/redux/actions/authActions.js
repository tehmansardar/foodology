import ACTIONS from './index';

export const dispatchUsermailPass = res => {
  return {
    type: ACTIONS.USER_EMAIL_PASS,
    payload: {
      username: res.username,
      email: res.email,
      password: res.password,
    },
  };
};
