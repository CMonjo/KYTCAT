import React, { Component } from 'react';
import '../style/css/bootstrap.min.css';
import '../style/index.css';
import marked from 'marked';

class Markdown extends React.Component {

    createMarkup(text) {
        const renderText = marked(text, {sanitize: true});
        return {__html: renderText};
    }

    render() {
        return (
            <div className="col-sm-6">
                <div dangerouslySetInnerHTML={this.createMarkup(this.props.value)} />
            </div>
        )
    }
}

export default Markdown;