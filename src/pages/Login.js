import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser } from '../redux/actions';
import '../css/login.css';

class Login extends React.Component {
  state ={
    isEntryButtonDisabled: true,
    password: '',
    inputEmail: '',
    redirect: false,
  }

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  validate = () => {
    const five = 5;
    const { password, inputEmail } = this.state;
    if (password.length > five && this.validateEmail(inputEmail)) {
      this.setState({ isEntryButtonDisabled: false });
    } else {
      this.setState({ isEntryButtonDisabled: true });
    }
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value,
    }, () => this.validate());
  }

  handleClick = () => {
    const { addDispatch } = this.props;
    const { inputEmail } = this.state;
    // console.log(inputEmail);
    addDispatch(inputEmail);
    this.setState({ redirect: true });
  }

  render() {
    const { isEntryButtonDisabled, inputEmail, password, redirect } = this.state;
    return (
      <div className="login">
        <label htmlFor="inputEmail">
          Insira seu e-mail:
          <input
            type="email"
            data-testid="email-input"
            name="inputEmail"
            id="inputEmail"
            value={ inputEmail }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="password"
            id="password"
            value={ password }
            onChange={ this.onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ isEntryButtonDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        { redirect && <Redirect from="/" to="/carteira" />}
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDispatch: (value) => dispatch(addUser(value)),
});

Login.propTypes = {
  addDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
