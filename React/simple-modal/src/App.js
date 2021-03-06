import React from 'react';
import Modal from './components/modal';
import './App.css';

class App extends React.Component {
  
  state = {showmodal: false};

  onButtonClick = (e) => {
    this.setState({showmodal: true});
  };

  onClose = () => {
    this.setState({showmodal: false});
  }

  // TODO: Refer the below code for toggle instead of onClose
  // https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
  render(){
    return (<div>
      <button className="show-modal"  onClick={this.onButtonClick}>Show modal</button>      
      <Modal onClose={this.onClose} showmodal={this.state.showmodal}/>
    </div>   
  )
  }
}

export default App;
  