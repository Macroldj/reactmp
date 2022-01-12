import React, {Component} from 'react';
import {Provider} from "react-redux";

import './App.css';
import store from "./store";
import {sendAction} from "./actions";
import Add from "./components/add";
import Text from "./components/text";

class App extends Component {
  HandleClike = () => {
    const action = sendAction();
    store.dispatch(action)
    console.log(action)
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
      console.log("监听中的store:" + store.getState())
    })
    console.log("挂在完成之后的store:" + store.getState().value)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <button onClick={this.HandleClike}>点击一下</button>
            <div className="xiaoxiao">{store.getState().value}</div>
            <Add/>
            <Text/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
