// Opcja 1

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select'

const customStyles = {
  option: (provided, state) => ({
   borderBottom: '1px dotted black',
   color: 'white',
   padding: 20,
   background: 'grey',
  }),
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class App extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
      />
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// Option 2

var potatoTeam = ['Select Person', 'Doinika', 'Danuta', 'Kamil', 'Bartek', 'Łukasz', 'Tomek', 'Maciek H', 'Maciek Ch', 'Oskar'];
var createSelect = document.createElement('select');
document.getElementsByTagName('body')[0].appendChild(createSelect);

for (var i = 0; i < potatoTeam.length; ++i) {
  var createOption = document.createElement('option');

  if (i == 0) {
    createOption.setAttribute('disabled', 'disabled');
    createOption.setAttribute('selected', 'selected');
  }

  var oTxt = document.createTextNode(potatoTeam[i]);
  createOption.appendChild(oTxt);

  document.getElementsByTagName('select')[0].appendChild(createOption);
}


// http://jsfiddle.net/g6jrt8ey/
