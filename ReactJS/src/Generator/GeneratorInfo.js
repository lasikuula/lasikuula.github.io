import React from 'react';
import ReactDOM from 'react-dom';
import './Generator.css';
import { Button, Grid, TextField } from '@material-ui/core/';

function MakeRows(value, gender) {
  let setRows = [];
  
  for (let i=1; i <= value; i++) {
    setRows.push(
        <TextField id={'key' + i} key={i} className="informationInput" label={'Party person number ' + i} variant="outlined" />
    )
  }

  if (gender === 'fomen') {
    return ReactDOM.render(setRows, document.getElementById('fomenRows'));
  }
  else {
    return ReactDOM.render(setRows, document.getElementById('menRows'));
  }
}

class GeneratorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      men: '',
      fomen: '',
      fomenRow: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRows = this.handleRows.bind(this);
    this.generateSeats = this.generateSeats.bind(this);
  }


  // Handle if input comes from men of fomen and setState
  handleChange(event) {
    this.setState({[event.target.name] : event.target.value, fomenRow : ((event.target.name === 'men') ? 'Men' : 'Fomen')});
  }

  // Hande how many row will show based on gender
  handleRows(event) {
    event.preventDefault();

    if ((this.state.men > 0 && this.state.men <= 50) || (this.state.fomen > 0 && this.state.fomen <= 50)) {
      if (this.state.fomenRow === 'Fomen') {
        MakeRows(this.state.fomen, 'fomen');
      }

      else {
        MakeRows(this.state.men);
      }
    }  

    else {
      alert('ERROR: Add number between 1 and 50')
    }
  }

  generateSeats() {
    // TODO: generator for seats
    alert('Here will be generating code');
  }
  
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>

          {/* START OF MEN */}
          <div className="generator men">
            <h1>Add information for men</h1>
              
              <h3>How meny men?</h3>

              <form onSubmit={this.generateSeats}>
                <TextField
                id="standard-number"
                name="men"
                label="Count"
                type="number"
                value={this.state.men}
                onChange={this.handleChange.bind(this)}
                />
                <br />
                <br />
            
                <Button variant="contained" onClick={this.handleRows} type="submit" value="Submit">Add row</Button>
                
              </form>
          
            <h3>Add names</h3>
            <form noValidate autoComplete="off">
              <div id="menRows">
                
              </div>
            </form>
          </div>
        </Grid>
        {/* END OF MEN */}

        {/* START OF FOMEN */}
        <Grid item xs={12} sm={6}>
          <div className="generator fomen">
            <h1>Add information for fomen</h1>
            
            <h3>How meny fomen?</h3>

            <form onSubmit={this.generateSeats}>
                <TextField
                id="standard-number"
                name="fomen"
                label="Count"
                type="number"
                value={this.state.fomen}
                onChange={this.handleChange.bind(this)}
                />
                <br />
                <br />
            
                <Button variant="contained"
                        name="fomenRow" 
                        onClick={this.handleRows} 
                        type="submit" 
                        value="fomen">Add row
                </Button>
                
            </form>
        
            <h3>Add names</h3>
            <form noValidate autoComplete="off">
              <div id="fomenRows">

              </div>
            </form>
          </div>
        </Grid>
        {/* END OF FOMEN */}

        {/* GENERATOR BUTTON */}
        <Grid item xs={12}>
          <div className="generator final">
            <Button variant="contained" onClick={this.generateSeats}>Generate!</Button>
          </div>
        </Grid>
        {/* END OF GENERATOR BUTTON */}
      </Grid>
    );
  }
}

export default GeneratorInfo;
