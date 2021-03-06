import React, { Component } from 'react';


class Problem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: {},
        };
    }

    componentDidMount() {
        console.log(this.props.problems.find((problem) => problem.id === this.props.match.params.id));
        this.setState({problem: this.props.problems.find((problem) => problem.id === this.props.match.params.id)});
    }

    

    render() {
        const { problem } = this.state;
        return ( 
            <>
                <h2>Problem Detail</h2>
                <h3>name</h3>
                <p>{this.state.problem.name}</p>
                <h3>explanation</h3>
                <p>{this.state.problem.explanation}</p>
            </>

        );
    }
}



export default Problem;