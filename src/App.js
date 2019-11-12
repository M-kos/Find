import React, {Component} from 'react';
import './App.css';

import SearchLine from './components/searchLine/searchLine';
import TextBlock from './components/textBlock/textBlock';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchLine />
        <TextBlock />
      </div>
    );
  }
  
}

export default App;
