import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import ReduxActions from './ReduxActions/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
               <ReduxActions showDefaultText={true}/>
          </div>
       </Provider>
    );
  }
}
export default App;
