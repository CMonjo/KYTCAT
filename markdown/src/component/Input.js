import React, { Component } from 'react';
import '../style/css/bootstrap.min.css';
import '../style/index.css';

class Input extends Component {

    state = {
        text: "",
    };

    editText(event) {
        const text = event.target.value;

        this.setState({text: text});
        this.props.onInputChange(text);
    }

    render() {
        return (
            <div className="col-sm-6">
                <textArea rows="35"
                className="form-control"
                value={this.state.text}
                onChange={(e) => this.editText(e)}/>
            </div>
        );
    }
}

export default Input;
