import React, { Component } from 'react';
import { Paper } from 'material-ui';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';

class Explanation extends Component {
	constructor(props){
		super(props);

		this.state = {
			chips : [],
		}
	}
  render() {
		const styles = {
			toolbar : {
				height: 33,
			},
			toolbarText : {
				fontSize: '12px',
			},
			customTextarea : {
				width: '100%',
				maxWidth: '100%',
				minWidth: '100%',
				height: '100%',
				minHeight: 100,
				border: 'none',
				borderRight: '2px solid rgba(200,200,200,.5)',
				borderBottom: '2px solid rgba(200,200,200,.5)',
				outline: 'none',
				overflow: 'auto',
			},
			nodeList : {
				display: 'inline',
				padding: 5,
				marginLeft: 5,
			},
			bigTextarea: {
				fontSize: '24px',
				width: '100%',
				maxWidth: '100%',
				minWidth: '100%',
				height: '100%',
				minHeight: 100,
				border: '2px solid rgba(0,0,0,.1)',
				outline: 'none',
			},
		}
    return (
      <div>
			<h4>Explain:</h4>
				<div className="row">
					<div className="col-sm-12">
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<textarea style={styles.bigTextarea}>
						</textarea>
					</div>
				</div>
				<div className="row">
				<Paper zIndex={1}>
					<div className="col-sm-12">
						Dots used:
						<List>
								<Chip/>
						</List>
					</div>
					</Paper>
				</div>
      </div>
    );
  }
}

export default Explanation;
