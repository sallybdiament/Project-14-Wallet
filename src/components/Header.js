import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email logado:
          { email }
        </p>
        <p data-testid="total-field">
          Total em R$:
          {' '}
          {
            expenses.reduce((accExp, exp) => (
              (accExp + (Number(exp.value) * Number(exp.exchangeRates[exp.currency].ask)))
            ), 0)
          }
        </p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
