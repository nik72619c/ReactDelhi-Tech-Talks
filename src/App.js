import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

const styles={
  container:{
    position:'absolute',
    top: 0,
    left: 0,
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
    this.handleModalChange=this.handleModalChange.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }
  handleModalChange(){
    this.setState({isModalVisible: !this.state.isModalVisible});
    console.log(this.state);
  }

  closeModal(event){
    this.setState({isModalVisible: false});
    //event.stopPropagation();
  }
  render() {
    return (
      <div style={styles.container} >
       {this.state.isModalVisible && <Modal closeModal={this.closeModal}>this is my modal !</Modal>}
       <button onClick={this.handleModalChange}>show modal</button>
      </div>
    );
  }
}

export default App;
