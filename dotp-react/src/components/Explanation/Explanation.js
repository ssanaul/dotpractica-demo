import React, { Component } from 'react';
import { Paper } from 'material-ui';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

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
		}
    return (
      <div>
			<h4>Explain:</h4>
				<Paper>
				<div className="row">
					<div className="col-sm-12">
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<textarea style={styles.customTextarea}>
						</textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<List>
								<Chip style={styles.nodeList}>
									item1
								</Chip>
								<Chip style={styles.nodeList}>
									item2
								</Chip>
								<Chip style={styles.nodeList}>
									item3
								</Chip>
						</List>
					</div>
				</div>
				</Paper>
      </div>
    );
  }
}

export default Explanation;
