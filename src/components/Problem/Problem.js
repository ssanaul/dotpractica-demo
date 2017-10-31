import React, { Component } from 'react';
import Solution from '../Solution/Solution';

class Problem extends Component {

  render() {
    return (
      <div>

        <h3>{this.props.title}</h3>
		      <Solution
            inputType={this.props.inputType}
            options={this.props.options}/>

      </div>
    );
  }
}
export default Problem;
