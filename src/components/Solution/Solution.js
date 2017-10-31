import React, { Component } from 'react';
import Explanation from '../Explanation/Explanation';
import Answer from '../Answer/Answer';

class Solution extends Component {
  render() {
    return (
      <div>

		<Explanation/>

		<Answer
      inputType={this.props.inputType}
      options={this.props.options}/>

      </div>
    );
  }
}
export default Solution;
