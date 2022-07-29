export const ADD_USER = 'ADD_USER';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addUser = (email) => ({ type: ADD_USER, email });

const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

const serviceFetch = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const arrayCurr = Object.keys(data);
  const currSemUSDT = arrayCurr.filter((currencie) => currencie !== 'USDT');
  return currSemUSDT;
};

export const fetchCurrencies = () => async (dispatch) => {
  const response = await serviceFetch();
  dispatch(getCurrency(response));
};
