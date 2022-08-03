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
    test('O segundo link deve renderizar a página ./carteira', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        const inputEmail = screen.getByRole('textbox', {name: 'Insira seu e-mail:'});
        const inputSenha = screen.getByTestId("password-input");
        userEvent.type(inputEmail, 'teste@teste.com');
        userEvent.type(inputSenha, '123456');
        const botaoEntrar = screen.queryByText('Entrar');
        userEvent.click(botaoEntrar);
        const { pathname } = history.location;
        expect(pathname).toBe('/carteira');
      });
})
