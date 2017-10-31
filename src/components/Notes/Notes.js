import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
        [
          "Overview",
          [
            "4 basic principles: opportunity cost, net marginal benefits, the invsible hand, trade",
          ]
        ],
        [
          "Opportunity Cost",
          [
            "4 basic principles: opportunity cost, net marginal benefits, the invsible hand, trade",
          ]
        ],
        [
          "Net Marginal Benefits",
          [
            "4 basic principles: opportunity cost, net marginal benefits, the invsible hand, trade",
          ]
        ],
      ]
    }
  }

  render() {

  return ( <div>

    {
      this.state.notes.map(function(n){
        return <ListItem
          primaryText={n[0]}
          nestedItems={[
            n[1].map(function(s){
              return <ListItem
                primaryText={s}
              />
            })
          ]}
        />
      })
    }

  </div> ); } } export default Notes;
