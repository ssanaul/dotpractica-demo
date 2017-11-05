import React, { Component } from 'react';
import Solution from '../Solution/Solution';

class Problem extends Component {

  render() {
    return (
      <div>

        <h3 style={{marginBottom: 0}}>{this.props.title}</h3>
		      <Solution
            inputType={this.props.inputType}
            options={this.props.options}
            completed={this.props.completed}
            answer={this.props.answer}
            explanation={this.props.explanation}/>

      </div>
    );
  }
}
export default Problem;
