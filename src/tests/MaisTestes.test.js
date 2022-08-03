import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import userEvent from '@testing-library/user-event';

describe('teste do botao adicionar despes', () => {
    // test('se o botao adicionar despesa funciona', () => {
    //     const intitialStateMock = {
    //         email: 'sally@gmail.com',
    //         wallet: {
    //         currencies: ['usd', 'euro'],
    //         expenses: [],
    //         }}
    //         renderWithRouterAndRedux(<Wallet />,
      
    //         {
    //         initialState: intitialStateMock,
    //         initialPath: '/carteira' });
    //         const inputValue = screen.getByText(/valor:/i);
    //         userEvent.type(inputValue, '10');
    //         const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
    //         userEvent.click(botaoAddExp);
    //         const rows = screen.getAllByRole('row');;
    //         expect(rows).toHaveLength(2);
    // })
})