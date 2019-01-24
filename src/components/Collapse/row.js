import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setCategory } from './../../redux/actions/list-actions'


class Row extends Component {

    state = {
        id: '',
        active: false,
        activebackground: '#ffffff'
    }

    onClick = (name) => {
        const { setCategory ,onClick , item  } = this.props
        this.setState({
            active: !(this.state.active),
            activebackground: '#e6e6e6'
        })
        onClick(item)
        setCategory(name)
    }
    render() {
        const {  activeCategory , item :{name}  ,  icon , style } = this.props
        return (

            activeCategory == name ?
                <div className="row-container-active"
                    // style={{ backgroundColor: this.state.active? undefined :"#ffffff" }}

                    onClick={() => this.onClick(name)}>
                    <FontAwesomeIcon icon={icon} className="row-icon" style={{... style}} />
                    <p style={{...style}}>{name}</p>
                </div>

                : <div className="row-container"
                    // style={{ backgroundColor: backgroundColor }}
                    onClick={() => this.onClick(name)}>
                    <FontAwesomeIcon icon={icon} className="row-icon" style={{... style}} />
                    <p style={{... style}}>{name}</p>
                </div>
        )
    }
}





const mapStateToProps = (state) => ({
    activeCategory: state.List.activeCategory

})

const mapDispatchToProps = {
    setCategory,

}

export default connect(mapStateToProps, mapDispatchToProps)(Row)

