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
            value: '1',
            description: 'a',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'alimentacao', 
            exchangeRates: mockData },
        {
            id: 1,
            value: '2',
            description: 'b',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'alimentacao', 
            exchangeRates: mockData },
        ]   }  
}

describe('tela da carteira', () => {
    test('Na página /carteira, aparecem alguns elementos', () => {
        renderWithRouterAndRedux(<Wallet/>);
            const cambioBRL = screen.getByText(/câmbio: brl/i);
            expect(cambioBRL).toBeInTheDocument();
            const valueInput = screen.getByTestId('value-input');
            expect (valueInput).toBeInTheDocument();
    });
    test('Na página /carteira, aparecem as despesas cadastradas', () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const emailLogado = screen.getByTestId('email-field');
        expect(emailLogado).toBeInTheDocument();
        const botaaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
        expect(botaaoAddExp).toBeInTheDocument();
        }); 
    test('se o addDespesa  funciona', async () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
        userEvent.click(botaoAddExp);
        const editButton = await screen.getAllByRole('button', {  name: /editar despesa/i});
        expect(editButton).toHaveLength(2);
    })
    test('se no input moeda foi chamada a fetch', async () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const inputMoeda = await screen.getByLabelText('Moeda:');
        expect(inputMoeda).toHaveLength(2);
    })
    test('se aparece o botao editar despesa', async () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
        userEvent.click(botaoAddExp);
        const editButton = await screen.getAllByRole('button', {  name: /editar despesa/i});
        userEvent.click(editButton[0]);
        const editExpButton = await screen.getAllByRole('button', { name: 'Editar despesa'});
        expect(editExpButton).toHaveLength(3);
    })
    test('se ao clicar em deletar a despesa é deletada', async () => {
        renderWithRouterAndRedux(<Wallet />,
      
        {
        initialState: initialStateMock,
        initialPath: '/carteira' });
        const botaoAddExp = screen.getByRole('button', {  name: /adicionar despesa/i});
        userEvent.click(botaoAddExp);
        const deleteButton = await screen.getAllByRole('button', {  name: /excluir/i});
        userEvent.click(deleteButton[0]);
        const rows = await screen.getAllByRole('row');;
        expect(rows).toHaveLength(2);
    })
    })
  

  