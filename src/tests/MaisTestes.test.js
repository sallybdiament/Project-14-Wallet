import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import userEvent from '@testing-library/user-event';
import WalletForm from '../components/WalletForm';

describe('teste do botao adicionar despes', () => {
    test('se o botao adicionar despesa funciona', () => {
        const initialStateMock = {
            email: 'sally@gmail.com',
            wallet: {
            currencies: ['usd', 'euro'],
            expenses: [
                {
                    id: 0,
                    value: '',
                    description: '',
                    currency: 'USD',
                    method: 'Dinheiro',
                    tag: 'alimentacao', 
                    exchangeRates: mockData },
            ],
            }}      
        renderWithRouterAndRedux(<WalletForm />, {
        initialState: initialStateMock,
        });
            const inputValue = screen.getByTestId("value-input");
            userEvent.type(inputValue, '10');
            const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
            userEvent.click(botaoAddExp);
            expect(inputValue).toHaveAttribute('value', '10');
            const rows = screen.getAllByRole('row');;
            expect(rows).toHaveLength(2);
    })
    test('se a api é chamda', () => {
            const mockFetch = Promise.resolve({
            json: () => Promise.resolve(mockData),
            })
            const mockedAPI = jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);
            renderWithRouterAndRedux(<WalletForm />);
            expect(mockedAPI).toBeCalled();
    })
    test('se o total valor é salvo no Header', () => {
        const initialStateMock = {
            email: 'sally@gmail.com',
            wallet: {
            currencies: ['usd', 'euro'],
            expenses:
                [{
                    id: 0,
                    value: '1',
                    description: 'a',
                    currency: 'USD',
                    method: 'Dinheiro',
                    tag: 'alimentacao', 
                    exchangeRates: {
                        USD: {
                          ask: 5.182,
                        } },
                    }
                ]   }  
        }
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const inputValue = screen.getByTestId("value-input");
            userEvent.type(inputValue, '1');
            const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
            userEvent.click(botaoAddExp);
        const totalValue = screen.getByTestId('total-field');
        expect(totalValue.innerHTML).toBe('5.18')
    })
})