export const ADD_USER = 'ADD_USER';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const ACTIVATE_EDIT = 'ACTIVATE_EDIT';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const addUser = (email) => ({ type: ADD_USER, email });
export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
export const deleteCustomer = (payload) => ({ type: DELETE_CUSTOMER, payload });
export const activateEdit = (payload) => ({ type: ACTIVATE_EDIT, payload });
export const editExpense = (payload) => ({ type: EDIT_EXPENSE, payload });

const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

// const serviceFetch = async () => {
//   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const data = await response.json();
//   return data;
// };

const getArrayOfCurrrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const arrayCurr = Object.keys(data);
  const currSemUSDT = arrayCurr.filter((currencie) => currencie !== 'USDT');
  return currSemUSDT;
};

export const fetchCurrencies = () => async (dispatch) => {
  const response = await getArrayOfCurrrencies();
  dispatch(getCurrency(response));
};

// export const getAPI = () => async (dispatch) => {
//   const response = await serviceFetch();
//   dispatch(addExpense(response));
// };
