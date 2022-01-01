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

export const dispatchUserHeightWeight = res => {
  return {
    type: ACTIONS.HEIGHT_WEIGHT,
    payload: {
      height: res.height,
      weight: res.weight,
    },
  };
};

export const dispatchUserAge = res => {
  return {
    type: ACTIONS.USER_AGE,
    payload: {
      age: res.age,
    },
  };
};

export const dispatchUserGender = res => {
  return {
    type: ACTIONS.USER_GENDER,
    payload: res,
  };
};

export const dispatchUserEthnicity = res => {
  return {
    type: ACTIONS.USER_ETHNICITY,
    payload: res,
  };
};

export const dispatchUserMaritalStatus = res => {
  return {
    type: ACTIONS.USER_MARITAL_STATUS,
    payload: res,
  };
};
