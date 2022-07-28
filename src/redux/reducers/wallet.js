import { REQUEST_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
