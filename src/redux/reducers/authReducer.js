import ACTIONS from '../actions';

const initialState = {
  username: '',
  email: '',
  password: '',
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
    default:
      return state;
  }
};

export default authReducer;
