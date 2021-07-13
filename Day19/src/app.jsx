import { number } from 'prop-types';
import React from 'react'
export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            number1: 1 ,
            number2: 1 ,
            number3: 1 ,
            number4: 1,
        }
    }
    changeNumber(n){
        if (n == 1){
            this.setState({number1 : this.state.number1 + 1})
        }
        if (n == 2){
            this.setState({number2 : this.state.number2 + 1})
        }
        if (n == 3){
            this.setState({number3 : this.state.number3 + 1})
        }
        if (n == 4){
            this.setState({number4 : this.state.number4 + 1})
        }
       
       
    }
    
    render(){
        return(
            <div class = "main">
                <h1>Try Me</h1>
                <button className = "b1"  onClick={()=>{this.changeNumber(1)}}> {this.state.number1} </button>
                <button className = "b2"  onClick={()=>{this.changeNumber(2)}}> {this.state.number2} </button>
                <button className = "b3"  onClick={()=>{this.changeNumber(3)}}> {this.state.number3} </button>
                <button className = "b4"  onClick={()=>{this.changeNumber(4)}}> {this.state.number4} </button>
            </div>
            
        )
    }
}
