import React, {Component} from 'react';
import './App.css';

import SearchLine from './components/searchLine/searchLine';
import TextBlock from './components/textBlock/textBlock';

class App extends Component {

  state = {
    inputValue: '',
    originalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas odio dolores? Id corporis ad aspernatur alias nesciunt quas, asperiores in sit tempore itaque ipsam debitis fuga dolores illum! Eaque, atque id! Accusamus vitae corporis cum architecto sed eius excepturi atque. Accusamus quae nemo harum aspernatur iure molestiae facere repudiandae. Sint sapiente, officia consectetur praesentium incidunt autem necessitatibus! Impedit officiis eligendi autem porro at, quia doloremque laudantium rem! Aliquid quibusdam repellendus quis assumenda aspernatur. Quae voluptatem quaerat nesciunt asperiores, expedita quam necessitatibus magni optio eveniet sapiente eos eligendi. Molestiae minus minima eos amet soluta voluptatibus unde tempore quae. Officia, obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas odio dolores? Id corporis ad aspernatur alias nesciunt quas, asperiores in sit tempore itaque ipsam debitis fuga dolores illum! Eaque, atque id! Accusamus vitae corporis cum architecto sed eius excepturi atque. Accusamus quae nemo harum aspernatur iure molestiae facere repudiandae. Sint sapiente, officia consectetur praesentium incidunt autem necessitatibus! Impedit officiis eligendi autem porro at, quia doloremque laudantium rem! Aliquid quibusdam repellendus quis assumenda aspernatur. Quae voluptatem quaerat nesciunt asperiores, expedita quam necessitatibus magni optio eveniet sapiente eos eligendi. Molestiae minus minima eos amet soluta voluptatibus unde tempore quae. Officia, obcaecati.',
    outputText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas odio dolores? Id corporis ad aspernatur alias nesciunt quas, asperiores in sit tempore itaque ipsam debitis fuga dolores illum! Eaque, atque id! Accusamus vitae corporis cum architecto sed eius excepturi atque. Accusamus quae nemo harum aspernatur iure molestiae facere repudiandae. Sint sapiente, officia consectetur praesentium incidunt autem necessitatibus! Impedit officiis eligendi autem porro at, quia doloremque laudantium rem! Aliquid quibusdam repellendus quis assumenda aspernatur. Quae voluptatem quaerat nesciunt asperiores, expedita quam necessitatibus magni optio eveniet sapiente eos eligendi. Molestiae minus minima eos amet soluta voluptatibus unde tempore quae. Officia, obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas odio dolores? Id corporis ad aspernatur alias nesciunt quas, asperiores in sit tempore itaque ipsam debitis fuga dolores illum! Eaque, atque id! Accusamus vitae corporis cum architecto sed eius excepturi atque. Accusamus quae nemo harum aspernatur iure molestiae facere repudiandae. Sint sapiente, officia consectetur praesentium incidunt autem necessitatibus! Impedit officiis eligendi autem porro at, quia doloremque laudantium rem! Aliquid quibusdam repellendus quis assumenda aspernatur. Quae voluptatem quaerat nesciunt asperiores, expedita quam necessitatibus magni optio eveniet sapiente eos eligendi. Molestiae minus minima eos amet soluta voluptatibus unde tempore quae. Officia, obcaecati.'
  };

  valueChange = (e) => {
    console.log(e.target.value);
    
    this.setState(
      { inputValue: e.target.value },
      this.searchSubStr
    );
  };

  searchSubStr = () => {
    const { originalText } = this.state;

    let strInputValRep = this.state.inputValue.replace(' ', '|')

    let rExp = new RegExp(strInputValRep, "gi");

    let subOutputText = originalText.split(' ');
    let arrText = subOutputText.map((el) => {
      return el.replace(rExp, (match) => `<span>${match}</span>`);
    });
    this.setState({outputText: arrText.join(' ')});
  };

  render() {
    const { inputValue, outputText } = this.state;

    return (
      <div className="App">
        <SearchLine valueChange = {this.valueChange} value = {inputValue} />
        <TextBlock outputText={outputText} />
      </div>
    );
  }
  
}

export default App;
