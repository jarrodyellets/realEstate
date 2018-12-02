import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import { Provider } from 'react-redux';

import store from './store';
import style from '../public/css/style.css';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
