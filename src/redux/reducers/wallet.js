import { GET_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
