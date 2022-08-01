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
    const botaoEntrar = screen.queryByText('Entrar');
    userEvent.click(botaoEntrar);
    const emailLogado = screen.queryByText('Email logado:');
    expect(emailLogado).toBeDefined();
})
// const initialStateMock = {
//     login: {
//       email: 'teste@teste.com',
//       password: '1234567',
//     },
//   };
//   const store = createStore(rootReducer, initialStateMock);

//   renderWithRouter(
//     <Provider store={ store }>
//       <App />
//     </Provider>, ["/carteira"],
//   );
})
