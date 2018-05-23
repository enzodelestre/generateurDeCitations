import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import citations from './citations';

class App extends React.Component{

    state = {
        citations
    };
    genererCitation = event => {
        const keyArray = Object.keys(citations);
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
        this.setState(citations[randomKey]);
    };

    render(){
        return(
            <div>
            <p>
                {this.state.citation}
                
                <span>- {this.state.auteur}</span>
            </p>
            <button onClick={e => this.genererCitation(e)}>Une autre citation</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);