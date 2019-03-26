import React, { Component } from 'react';
import './style/css/bootstrap.min.css';
import './style/index.css';
import Input from './component/Input';
import Markdown from './component/Markdown';

class App extends Component {

    state = {
        text: "",
    };

    onInputChange(text) {
        this.setState({text: text});
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Input onInputChange={(text) => this.onInputChange(text)}/>
          <Markdown text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default App;
