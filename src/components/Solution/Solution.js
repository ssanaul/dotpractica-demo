import React, { Component } from 'react';
import Explanation from '../Explanation/Explanation';
import Answer from '../Answer/Answer';

class Solution extends Component {
  render() {
    return (
      <div>
		<Explanation/>
		<Answer/>
		<hr/>
      </div>
    );
  }
}
export default Solution;