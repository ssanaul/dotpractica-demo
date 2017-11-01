import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Answer extends Component { render() {

  return ( <div>

        {
          this.props.inputType==='radio'?
            <RadioButtonGroup>
            {
              this.props.options.map(function(p){
                return <RadioButton
                        value={p}
                        label={
                          <p style={{fontWeight: 'normal'}}>{p}</p>
                        }
                      />
              })
            }
            </RadioButtonGroup>
          :
          <TextField/>
        }

  </div> ); } } export default Answer;
