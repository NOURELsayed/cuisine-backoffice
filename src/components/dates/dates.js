// @flow strict

import * as React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../dates/input'
import Dates2 from './dates2'
class dates extends React.Component {
    state = {
        color: ''
    }

    handleClick = (value) => {

        this.setState({ color: value })
    }
    render() {
        return (
            <div>
                <div className={this.state.color == "1" ? "btn" : " btnn"}
                    onClick={() => this.handleClick(1)}>
                    <FontAwesomeIcon className="circle" icon="stop-circle" />
                    <text className={this.state.color == "1" ? "text" : " Customize-Annually"} >Repeat Annually</text>
                </div>
                <div className={this.state.color == "2" ? "btnn" : " btn"}
                    onClick={() => this.handleClick(2)}>
                    <FontAwesomeIcon className="circle" icon="circle" />
                    <text className={this.state.color == "2" ? "Customize-Annually" : " text"}>Customize-Annually</text>
                </div>

                <div className="container">
                    <text className="textt-input">From</text>
                    <Input />
                    <text className="text-input">To</text>
                    <Input style={{ display: 'grid', gridrowgap: 'auto' }} />
                </div>
                <Dates2 />
                
                </div>

  
        )
    }
}

export default dates;






    {/* state= {
        bgColor: 'red'
      }
      
    
    
    handleClick() {
      this.setState({
        bgColor: 'blue'
      })
    }
    
    render (){
      return (
        <div>
          <button 
            onClick={this.handleClick} 
            style={{backgroundColor:this.state.bgColor}}>Button</button>
        </div> */}