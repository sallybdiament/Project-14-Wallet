export const ADD_USER = 'ADD_USER';
export const REQUEST_API_CURRENCY = 'REQUEST_API_CURRENCY';
export const GET_CURRENCY = 'GET_CURRENCY';

export const addUser = (email) => ({ type: ADD_USER, email });

const requestAPICurrency = () => ({
  type: REQUEST_API_CURRENCY,
});

const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

const serviceFetch = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const arrayCurr = Object.keys(data);
  return arrayCurr;
};

// export function fetchCurrencies() {
//   return async (dispatch) => {
//     dispatch(requestAPICurrency());
// const response = await fetch('https://economia.awesomeapi.com.br/json/all');
// const data = await response.json();
// const arrayCurr = Object.keys(data);
// dispatch(getCurrency(arrayCurr));
//   };
// }
//     return fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((currencies) => dispatch(getCurrency(currencies)));
//   };
// }

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestAPICurrency());
  const response = await serviceFetch();
  const payload = {
    currencies: response,
  };
  dispatch(getCurrency(payload));
};
