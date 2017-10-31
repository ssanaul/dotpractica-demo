import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';
import Display from './components/Display/Display';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			quizzes: [
				<Assessment
					key='0'
					title='Quiz 1'
					problems={[
						<Problem key='a' title='What is supply?'/>,
						<Problem key='b' title='What is demand?'/>,
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
			],
		}
	}
  render() {
	var displays = null;
	var allQuizzes = this.state.quizzes;
	var generatedDisplays = this.state.quizzes.map(function(q){
		var display = <Display quiz={q} quizzes={allQuizzes}/>
		return display
	})
	displays = generatedDisplays;
    return (
      <MuiThemeProvider>
		{
			displays.map(function(d){
				return <div>
					{d}
				</div>
			})
		}
      </MuiThemeProvider>
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
