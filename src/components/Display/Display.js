import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';
import { Card, CardTitle, Paper } from 'material-ui';

class Display extends Component {
  render() {
    return (
      <GridList
		cols={3}
		cellHeight={700}
		style={{width: '90%',
				margin: 'auto',}}
	  >
	  
		<div style={{height: '100%',}}>
			{this.props.quiz}
		</div>
					
		<Card
			style={{
				height: '100%',
				padding: 20,
			}}>
			<CardTitle
				title='Previous Assessments'
				style={{ width: 250, margin: 'auto',}}
			/>
			<Paper>
			{
				this.props.quizzes.map(function(q){
					return <ListItem
						primaryText={q.props.title}
						nestedItems={[
							q.props.problems.map(function(p){
								return <ListItem
									primaryText={p.props.title}
								/>
							})
						]}
					/>
				})
			}
			</Paper>
		</Card>
					
		<Card
			style={{
					height: '100%',
					padding: 20,
			}}>
			<CardTitle 
				title='Web'
				style={{ width: 50, margin: 'auto',}}
			/>
		</Card>
		<br/>
      </GridList>
    );
  }
}
export default Display;