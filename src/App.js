import React, { Component } from 'react';
import './App.css';
import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';
import Display from './components/Display/Display';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			displays: [
				<Display 
					quiz={
						<Assessment
							key='0'
							title='Quiz 1'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>
					}
					quizzes={[
						<Assessment
							key='0'
							title='Quiz 1'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>,
						<Assessment
							key='1'
							title='Quiz 2'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>
					]}
				/>,
				<Display 
					quiz={
						<Assessment
							key='1'
							title='Quiz 2'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>
					}
					quizzes={[
						<Assessment
							key='0'
							title='Quiz 1'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>,
						<Assessment
							key='1'
							title='Quiz 2'
							problems={[
								<Problem key='a' title='Problem 1a'/>,
								<Problem key='b' title='Problem 1b'/>,
							]}
						/>
					]}
				/>
			],	
		}
	}
  render() {
    return (
      <div>
		{
			this.state.displays.map(function(d){
				return <div>
					{d}
				</div>
			})
		}
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
