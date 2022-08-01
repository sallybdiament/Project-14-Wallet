import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
          { expenses.map((exp) => (
            <tr key={ exp.description }>
              <td>{ exp.description}</td>
              <td>{ exp.tag}</td>
              <td>{ exp.method}</td>
              <td>{ (Number(exp.value)).toFixed(2) }</td>
              <td>{ exp.name}</td>
              <td>{ (Number(exp.exchangeRates[exp.currency].ask)).toFixed(2) }</td>
              <td>
                {
                  (Number(exp.exchangeRates[exp.currency].ask)
                  * Number(exp.value)).toFixed(2)
                }
              </td>
              <td>Real</td>
            </tr>))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Table);
