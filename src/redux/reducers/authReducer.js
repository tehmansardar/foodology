import ACTIONS from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  height: '',
  weight: '',
  age: '',
  gender: '',
  ethnicty: '',
  maritalStatus: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_EMAIL_PASS: {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case ACTIONS.HEIGHT_WEIGHT: {
      return {
        ...state,
        height: action.payload.height,
        weight: action.payload.weight,
      };
    }
    case ACTIONS.USER_AGE: {
      return {
        ...state,
        age: action.payload.age,
      };
    }
    case ACTIONS.USER_GENDER: {
      return {
        ...state,
        gender: action.payload,
      };
    }
    case ACTIONS.USER_ETHNICITY: {
      return {
        ...state,
        ethnicty: action.payload,
      };
    }
    case ACTIONS.USER_MARITAL_STATUS: {
      return {
        ...state,
        maritalStatus: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
