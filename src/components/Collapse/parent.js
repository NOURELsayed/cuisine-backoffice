import React, { Component } from 'react'
import Children from './children';
import './collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Parent extends Component {
    state = {
        display: 'none',
        transform: "rotate(180deg)",
        transitionDuration: ".4s",
        clickedClass: ""
    }

    handleCollapseClick = () => {
        // alert("in collapse ")
        if (this.state.display == 'none') {
            this.setState({
                display: 'block',
                transform: "rotate(0deg)",
                // clickedClass: "collapse-row-clicked"

            })
            // alert("in active ")
        }
        else {
            this.setState({
                display: 'none',
                transform: "rotate(180deg)",
                // clickedClass: ""
            })
        }
    }

    render() {
        const {name , icon , style} = this.props
        return (
            <div style={{ height: 'auto' }}>
                <div onClick={() => this.handleCollapseClick()} className="parent-container" >
                    <FontAwesomeIcon icon={icon} style={{ ...style , fontSize: '1vh', alignSelf: 'center' }}  />
                    <p className="parent-p" style={{... style}}>{name}</p>
                    <FontAwesomeIcon className="parent-icon" style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} icon="chevron-down" />
                </div>
                <Children content={this.props.children} display={this.state.display} />

            </div>
        )
    }
}
