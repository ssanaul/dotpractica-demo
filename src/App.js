import React, { Component } from 'react';
import './App.css';
import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			quiz1: {
				key: 0,
				title: 'Quiz 1',
				problems: [
					<Problem key='0a' title="Problem 1a"/>,
					<Problem key='0b' title="Problem 1b"/>
				],
			},
			quiz2: {
				key: 1,
				title: 'Quiz 2',
				problems: [
					<Problem key='1a' title="Problem 2a"/>,
					<Problem key='1b' title="Problem 2b"/>
				],
			}
		}
	}
  render() {
    return (
      <div>
		<Assessment title={this.state.quiz1.title} problems={this.state.quiz1.problems}/>
		<br/>
		<Assessment title={this.state.quiz2.title} problems={this.state.quiz2.problems}/>
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
