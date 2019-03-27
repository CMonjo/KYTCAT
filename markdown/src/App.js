import React, { Component } from 'react';
import './style/css/bootstrap.min.css';
import './style/index.css';
import {sampleText} from "./sampleText";
import {sampleText2} from "./sampleText";

import Markdown from './component/Markdown';

class App extends Component {

    state = {
        text: "",
    };

    onButtonClick = () => {
        this.setState({text: sampleText2})
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button type="button" className="btn btn-primary" onClick={this.onButtonClick}>
                        {"Changer le fichier"}
                    </button>
                    <Markdown value={this.state.text}/>
                </div>
            </div>
        );
    }
}

export default App;
