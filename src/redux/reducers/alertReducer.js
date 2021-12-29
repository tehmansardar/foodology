import ACTIONS from '../actions';

const initialState = {
  show: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ALERT: {
      return {
        ...state,
        show: true,
      };
    }
    case ACTIONS.ALERT_CLOSE: {
      return {
        ...state,
        show: false,
      };
    }
    default:
      return state;
  }
};

export default alertReducer;
