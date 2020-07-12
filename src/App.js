import React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      data: [] 
    };
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
