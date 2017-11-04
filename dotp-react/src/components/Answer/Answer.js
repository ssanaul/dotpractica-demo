import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Radio, Form} from 'semantic-ui-react';

class Answer extends Component { render() {

  return ( <div>

        {
          this.props.inputType==='radio'?
          <Form>
            <Form.Field>
            {
              this.props.options.map(function(p){
                return <div>
                        <Radio
                          value={p}
                          label={p}
                        />
                        </div>
              })
            }
            </Form.Field>
            </Form>
          :
          <TextField/>
        }

  </div> ); } } export default Answer;
