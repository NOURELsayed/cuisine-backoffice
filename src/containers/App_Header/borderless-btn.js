import React, { Component } from 'react'
import { connect } from 'react-redux'
import { headerFlagHandle } from '../../redux/actions/app-actions'
import './style.css'
class borderless_Button extends Component {
    render() {
        const { headerFlag, headerFlagHandle, name } = this.props
        const style = {
            width: 'auto',
            height: this.props.height,
            padding: '0.5% 2%',
            borderRadius: '1vh',
            border: headerFlag == name ? '1px solid red' : 'none',
            fontSize: headerFlag == name ? '0.8vw' : '0.7vw',
            textAlign: 'center',
            color: headerFlag == name ? 'rgb(237, 40, 43)' : '#bbbbbb',
            margin: '0 2%',
            backgroundColor: '#ffffff',
            fontWeight: headerFlag == name ? 'bold' : 'normal',
            transition: 'color 0.2s , border 0.2s , font-size 0.2s',
            whiteSpace: 'nowrap'
        };

        return (
            <button className="header_btns" style={style} onClick={() => headerFlagHandle(name)}>
                {name}
            </button>
        )

    }
}

const mapStateToProps = (state) => ({
    headerFlag: state.App.headerFlag
})

const mapDispatchToProps = {
    headerFlagHandle
}

export default connect(mapStateToProps, mapDispatchToProps)(borderless_Button)
