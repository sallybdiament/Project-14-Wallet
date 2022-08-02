import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCustomer } from '../redux/actions';

class Table extends Component {
handleClick = (event) => {
  const { id } = event.target;
  const { deleteCustomerDispatch } = this.props;
  deleteCustomerDispatch(id);
}

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
        <tbody>
          { expenses.map((exp) => (
            <tr key={ exp.description }>
              <td>{ exp.description}</td>
              <td>{ exp.tag}</td>
              <td>{ exp.method}</td>
              <td>{ (Number(exp.value)).toFixed(2) }</td>
              <td>{ exp.exchangeRates[exp.currency].name}</td>
              <td>{ (Number(exp.exchangeRates[exp.currency].ask)).toFixed(2) }</td>
              <td>
                {
                  (Number(exp.exchangeRates[exp.currency].ask)
                  * Number(exp.value)).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="submit"
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  key={ exp.id }
                  type="submit"
                  onClick={ this.handleClick }
                  id={ exp.id }
                >
                  Excluir
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCustomerDispatch: (e) => dispatch(deleteCustomer(e)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteCustomerDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
