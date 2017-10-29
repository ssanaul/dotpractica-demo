import React, { Component } from 'react';
import './App.css';
import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			title: 'Quiz name',
			problems: [
				<Problem title="hello world"/>,
				<Problem title="lorem ipsum"/>
			],
		}
	}
  render() {
    return (
      <div>
		<Assessment title={this.state.title} problems={this.state.problems}/>
      </div>
    );
  }
}

export default App;

/*
	Models:
	Assessment ==> A
	Problem ==> P
	Answer ==> N
	Explanation ==> X
	Solution ==> S
	
	Relations:
	A --1tm--> P
		P --1t1--> N
			N --1tm--> X
			N --1t1--> S
	
	Web:
	A[m]-->A[k]
	A[m].P[m]-->A[k].P[k]
	
	Access:
	X[m]-->A[k]-->A[k].S[k].*
	
*/
