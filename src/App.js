import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

const styles={
  container:{
    
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
 
  }
};
class App extends Component {

  constructor(){
    super();
    this.state={isModalVisible: false};
    this.handleModalChange=this.handleModalChange.bind(this)
  }
  handleModalChange(){
    this.setState({isModalVisible: !this.state.isModalVisible});
    console.log(this.state);
  }
  render() {
    return (
      <div style={styles.container}>
       {this.state.isModalVisible && <Modal>this is my modal !</Modal>}
       <button onClick={this.handleModalChange}>show modal</button>
      </div>
    );
  }
}

export default App;
