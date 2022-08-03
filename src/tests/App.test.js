import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderWithRouter, renderWithRouterAndRedux } from './helpers/renderWith';
import { MemoryRouter, Router } from 'react-router-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import waitFor from '@testing-library/react';
import user from '../redux/reducers/user';

describe('tela de login', () => {
    test('se na página de login tem um campo para digitar email', () =>{
        renderWithRouterAndRedux(
              <App />
          );
        const inputEmail = screen.queryByText('Insira seu e-mail:');
        expect(inputEmail).toBeInTheDocument();
    })
    test('se na página de login tem um campo para digitar senha', () =>{
        renderWithRouterAndRedux(
            <App />
        );
        const inputSenha = screen.queryByText('Senha:');
        expect(inputSenha).toBeInTheDocument();
    })
    test('se na página de login tem um botão Entrar', () =>{
        renderWithRouterAndRedux(
            <App />
        );
        const botaoEntrar = screen.queryByText('Entrar');
        expect(botaoEntrar).toBeInTheDocument();
    })
test('se ao clicar no botão entrar muda para a página da carteira', () =>{
    const history = createMemoryHistory();
    const store = createStore(rootReducer);
    renderWithRouterAndRedux(
        <App />
    );
    const inputEmail = screen.getByRole('textbox', {name: 'Insira seu e-mail:'});
    const inputSenha = screen.getByTestId("password-input");
    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputSenha, '123456');
    const botaoEntrar = screen.queryByText('Entrar');
    userEvent.click(botaoEntrar);
    const emailLogado = screen.queryByText('Email logado:');
    console.log(emailLogado);
    expect(emailLogado).toBeInTheDocument();
})
test('outra maneira: se ao clicar no botão entrar muda para a página da carteira', () =>{
//     const arrayCurr = Object.keys(mockData);
//   const currSemUSDT = arrayCurr.filter((currencie) => currencie !== 'USDT');
//     const initialStateMock = {
//       email: 'teste@teste.com',
//       currencies: currSemUSDT,
//       expenses: [],
//   };
//   const store = createStore(rootReducer, initialStateMock);
//     renderWithRouterAndRedux(
//         // <Provider store={ store }>
//             <Wallet />
//         // </Provider>,
//   );
//   const emailLogado = screen.getByText('Câmbio');
//   expect(emailLogado).toBeInTheDocument();
})
})
