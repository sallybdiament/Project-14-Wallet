import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import userEvent from '@testing-library/user-event';

const initialStateMock = {
    email: 'sally@gmail.com',
    wallet: {
    currencies: ['usd', 'euro'],
    expenses:
        [{
            id: 0,
            value: '0',
            description: 'a',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'alimentacao', 
            exchangeRates: {
                USD: {
                  ask: 5.182,
                } }, },
                {
                    id: 1,
                    value: '2',
                    description: 'b',
                    currency: 'USD',
                    method: 'Dinheiro',
                    tag: 'alimentacao', 
                    exchangeRates: {
                        USD: {
                          ask: 5.182,
                        } },
                },
        ],
        editor: false,
    }  
}

describe('tela da carteira', () => {
    test('o edit altera o valor do total', () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
        userEvent.click(botaoAddExp);
        const editButton = screen.getAllByRole('button', {  name: /editar despesa/i});
            userEvent.click(editButton[0]);
        const editExpButton = screen.getAllByRole('button', { name: 'Editar despesa'});
        const inputValue = screen.getByTestId("value-input");
            userEvent.type(inputValue, '1');
            userEvent.click(editExpButton[0]);
        const totalValue = screen.getByTestId('total-field');
        expect(totalValue.innerHTML).toBe('15.55')
    })
    test('o edit chama funcao sort', () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const editButton = screen.getAllByRole('button', {  name: /editar despesa/i});
            userEvent.click(editButton[0]);
        const editExpButton = screen.getAllByRole('button', { name: 'Editar despesa'});
        const inputValue = screen.getByTestId("value-input");
            userEvent.type(inputValue, '1');
            userEvent.click(editExpButton[0]);
            const newValue = screen.getByRole('cell', {  name: /1\.00/i});
            expect(newValue).toBeInTheDocument();
     
        })
        test('o edit altera o valor do total', () => {
            renderWithRouterAndRedux(<Wallet />,
          
            {
            initialState: initialStateMock,
            initialPath: '/carteira' });
            const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
            userEvent.click(botaoAddExp);
            const editButton = screen.getAllByRole('button', {  name: /editar despesa/i});
                userEvent.click(editButton[1]);
            const editExpButton = screen.getAllByRole('button', { name: 'Editar despesa'});
            const inputValue = screen.getByTestId("value-input");
                userEvent.type(inputValue, '0');
                userEvent.click(editExpButton[0]);
            const totalValue = screen.getByTestId('total-field');
            expect(totalValue.innerHTML).toBe('0.00')
        })
})
