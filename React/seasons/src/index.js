import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Hi there!!</div>
// };

// Converted the above function component to class component to handle async calls:
// Step1: Convert to Class component
// Step2: Make use of State

class App extends React.Component{
  // 1st way for state initialization
  // constructor(props){
  //   super(props);
  //   // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT OF STATE OBJECT PROPERTIES
  //   this.state = { lat: null, errorMessage: ''};
  // }

  // 2nd way of state initialization (syntactic sugar)

  state = {lat: null, errorMessage: ''};

  componentDidMount(){  
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // WE ALWAYS CALL  this.setState()
        this.setState({lat: position.coords.latitude});
        // we never ever do this assignment
        // this.state.lat = position.coords.latitude
      },
      err =>this.setState({errorMessage: err.message})
    );
  }

  render(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latidude: {this.state.lat}</div> 
    }
    return <div>Loading!!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))