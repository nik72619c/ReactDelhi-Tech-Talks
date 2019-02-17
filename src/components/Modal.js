import React from 'react';
import ReactDOM from 'react-dom';

const styles={
    container:{
        position:'absolute',
        top: '30%',
        left: '30%',
        width: 650,
        height: 350,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    content:{
        backgroundColor:'white',
        borderRadius: 10,
        boxShadow:'0 0 10px black',
       
        width:'100%',
        height: '100%',

    }
}
export default class Modal extends React.Component{

    constructor(props){
        super(props);
        this.closeModal=this.closeModal.bind(this);
    }

    closeModal(){
        this.props.closeModal();
    }

    
    
    render(){
        return ReactDOM.createPortal((
            <div style={styles.container}>
            <div style={styles.content}>{this.props.children}</div>
            <button onClick={this.closeModal}>close</button>
            </div>
       ) , document.querySelector('#my-root'))
    }
}