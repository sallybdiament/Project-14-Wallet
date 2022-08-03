import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';

describe('tela da carteira', () => {
    //   test('Na página ./carteira, aparece o email logado', () => {
    //     const { history } = renderWithRouterAndRedux(<App />);
    //     const inputEmail = screen.getByRole('textbox', {name: 'Insira seu e-mail:'});
    //     const inputSenha = screen.getByTestId("password-input");
    //     userEvent.type(inputEmail, 'teste@teste.com');
    //     userEvent.type(inputSenha, '123456');
    //     const botaoEntrar = screen.queryByText('Entrar');
    //     userEvent.click(botaoEntrar);
    //     const emailLogado = screen.getByText('Email logado:teste@teste.com');
    //     expect(emailLogado).toBeInTheDocument();
    //   });
    test('Na página /carteira, aparecem alguns elementos', () => {
        renderWithRouterAndRedux(<Wallet/>);
            const cambioBRL = screen.getByText(/câmbio: brl/i);
            expect(cambioBRL).toBeInTheDocument();
            const valueInput = screen.getByTestId('value-input');
            expect (valueInput).toBeInTheDocument();
    })
    })
  