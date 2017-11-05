import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Assessment from './components/Assessment/Assessment';
import Problem from './components/Problem/Problem';
import Display from './components/Display/Display';
import Demo from './components/Demo/Demo';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			users: [],
			dots: [],
			quizzes: [
				<Assessment
					key='0'
					completed={true}
					value={0}
					title='Key Ideas of Economics'
					problems={[
						<Problem key='a'
						completed={true}
						title='Why do students usually benefit from studying in groups?'
						inputType='umbrella'
						explanation="Different students tend to have different skills. The principle of trade states that individuals should focus on a specialty."
					/>,
						<Problem key='b'
						completed={true}
						title="On Saturday afternoon, you can go out with friends, watch a movie, or wash your car. Your opportunity cost of washing your car would be:"
						inputType='radio'
						answer="the value of going out with friends OR watching a movie"
						explanation="Opportunity cost is the loss of potential gain from the alternatives of a choice. Since only one choice can be made, the potential gain lost is attributed to either of the two alternatives."
						options={[
							'the value of going out with friends',
							'the value of watching a movie',
							'the value of going out with friends AND watching a movie',
							'the value of going out with friends OR watching a movie'
						]}
						/>,
						<Problem key='c'
						completed={true}
						title="You and your roommate are dividing up household chores. The principle of trade tells you that it would be more efficient if:"
						inputType='radio'
						answer="one of you washes all the dishes while the other does a different chore"
						explanation="By specializing in our individual tasks, we benefit as a group."
						options={[
							'both of you wash your own dishes after each meal',
							'neither of you washes the dishes after eating',
							'each of you washes half of all the dirty dishes',
							'one of you washes all the dishes while the other does a different chore'
						]}
						/>,
					]}
				/>,
				<Assessment
					key='1'
					completed={true}
					value={1}
					title='Surplus: Practical Application'
					problems={[
						<Problem key='a'
						completed={true}
						title='Why did the number of American farmers decline since 1950?'
						explanation="Since technology has advanced, farmers have been more productive. They have been able to produce more crops, which decreased their cost. So, many farmers chose different careers."
						inputType='umbrella'
					/>
				]}
				/>,
				<Assessment
				key='2'
				completed={true}
				value={2}
				title='Supply and Demand'
				problems={[
						<Problem key='b'
						completed={true}
						title="When there is a shortage of a good, we expect the price will:"
						inputType='radio'
						options={[
							'increase',
							'decrease',
							'stagnate'
						]}
						answer='increase'
						/>,
						<Problem key='c'
						completed={true}
						title="When there is a surplus of a good, we expect the price will:"
						inputType='radio'
						options={[
							'increase',
							'decrease',
							'stagnate'
						]}
						answer='decrease'
						/>,
					]}
				/>,
				<Assessment
					key='3'
					completed={false}
					value={3}
					title="Market Equilibrium"
					problems={[
						<Problem key='a'
						completed={false}
						title="If the equilibrium price of solar panels is $200 per panel, but a price ceiling of $150 per panel is imposed, what happens to the market for solar panels?"
						inputType="radio"
						options={[
							"quantity demanded exceeds quantity supplied and a surplus occurs",
							"quantity demanded exceeds quantity supplied and a shortage occurs",
							"quantity supplied exceeds quantity demanded and a surplus occurs",
							"quantity supplied exceeds quantity demanded and a shortage occurs",
						]}
						/>,
					]}
					/>,
			],
		}
	}
  render() {
	const styles = {
		container: {
			width: '90%',
			margin: 'auto',
		},
	}
	var displays = null;
	var allQuizzes = this.state.quizzes;
	var generatedDisplays = this.state.quizzes.map(function(q){
		var display = <Display quiz={q} quizzes={allQuizzes}/>
		return display
	})
	displays = generatedDisplays;
    return (
			<div style={styles.container}>
				<MuiThemeProvider>
					<Demo displays={displays} quizzes={this.state.quizzes}/>
	      </MuiThemeProvider>
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
