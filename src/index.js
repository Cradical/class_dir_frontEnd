import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        return fetch('http://localhost:8000')
            .then(Response => Response.json())
            .then(ResponseJSON => this.setState({studentList: ResponseJSON}))
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }

}

ReactDOM.render( < App / > , document.getElementById('root'));
