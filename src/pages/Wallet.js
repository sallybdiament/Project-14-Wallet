import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
// import '../css/carteira.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
