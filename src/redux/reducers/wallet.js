import { GET_CURRENCY,
  ADD_EXPENSE, DELETE_CUSTOMER, ACTIVATE_EDIT, EDIT_EXPENSE } from '../actions';

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
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_CUSTOMER:
    return {
      ...state,
      expenses: state.expenses
        .filter((exp) => Number(exp.id) !== Number(action.payload)) };
  case ACTIVATE_EDIT:
    return { ...state, editor: true, idToEdit: action.payload };
  case EDIT_EXPENSE:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
