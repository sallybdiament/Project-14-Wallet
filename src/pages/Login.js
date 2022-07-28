import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state ={
    isEntryButtonDisabled: true,
    password: '',
    inputEmail: '',
    redirect: false,
  }

  validate = () => {
    const five = 5;
    const { password, inputEmail } = this.state;
    if (password.length > five && inputEmail.includes('@')) {
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
    this.setState({ redirect: true });
  }

  render() {
    const { isEntryButtonDisabled, inputEmail, password, redirect } = this.state;
    return (
      <div>
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

export default Login;
