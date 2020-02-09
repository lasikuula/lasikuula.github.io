import React from 'react';
import './Generator.css';
import { Grid } from '@material-ui/core/';
import GeneratorInfo from './GeneratorInfo'

class Generator extends React.Component {
  render() {
    return (
      <div>
      <Grid container>
        <Grid className="generator centered" item xs={12}>
          <div className="centered">
            <h1>Generator</h1>
            <p>Welcome to use the seat generator. Here is simple quide how to use it:</p>
            <ul>
              <li>First: Select how meny men or fomen is in the party</li>
              <li>Second: Add his/her name</li>
              <li>Third: Click "generate" button and see result!</li>
              <li>ENJOY!</li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <GeneratorInfo />
    </div>
    );
  }
}

export default Generator;
