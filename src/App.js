import React, {Component} from 'react';
import './App.css';

import SearchLine from './components/searchLine/searchLine';
import TextBlock from './components/textBlock/textBlock';

class App extends Component {

  state = {
    inputValue: ''
  };

  valueChange = (e) => {
    this.setState(
      {
        inputValue: e.target.value
      });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="App">
        <SearchLine valueChange = {this.valueChange} value = {inputValue} />
        <TextBlock />
      </div>
    );
  }
  
}

export default App;
