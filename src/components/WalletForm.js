import React, { Component } from 'react';

class WalletForm extends Component {
  componentDidMount() {
    // fetch('https://economia.awesomeapi.com.br/json/all')
    //   .then((response) => response.json())
    //   .then((currencies) => {
    //     console.log(currencies);
    //     dispatch(receiveCurrency(currencies));
    //   });
  }

  render() {
    return (
      <div>
        <label htmlFor="valorDespesa">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            name="valorDespesa"
            id="valorDespesa"
            // value={ valorDespesa }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrDespesa">
          Valor:
          <input
            type="text"
            data-testid="description-input"
            name="descrDespesa"
            id="descrDespesa"
            // value={ valorDespesa }
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencyInput">
          Moeda:
          <select
            data-testid="currency-input"
            name="currencyInput"
            id="currencyInput"
            // value={ currencyInput }
            // onChange={ onInputChange }
          >
            <option>dolar</option>
            <option>euro</option>
          </select>
        </label>
        <label htmlFor="metodoInput">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="metodoInput"
            id="metodoInput"
            // value={ metodoInput }
            // onChange={ onInputChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoriaInput">
          Categoria da despesa:
          <select
            data-testid="tag-input"
            name="categoriaInput"
            id="categoriaInput"
            // value={ categoriaInput }
            // onChange={ onInputChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default WalletForm;
