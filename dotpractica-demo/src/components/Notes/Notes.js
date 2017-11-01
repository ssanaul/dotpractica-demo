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
            "every activity has a tradeoff",
            "the opportunity cost of a good or service is the value of the next best alternative that is given to acquire that good or service"
          ]
        ],
        [
          "Net Marginal Benefits",
          [
            "how do people make decisions?",
            "maximize benefit, weigh benefit vs cost",
            "process one unit at a time ==> marginal",
            "rational people take an action if and only if the marginal benefits outweight the costs of that action"
          ]
        ],
        [
          "The Invisible Hand Principle",
          [
            "social effects of decisions",
            "when markets operate efficiently, self interested behavior can benefit everyone"
          ]
        ],
        [
          "Trade",
          [
            "example of individual action leading to greater benefit",
            "gains of trade- extra productivity from specialization and trade",
            "occurs when individuals specialize in the activity which they are best at"
          ]
        ]
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
