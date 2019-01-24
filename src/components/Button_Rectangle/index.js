import React, { Component } from 'react'

export default class Button_Rectangle extends Component {
    render() {
        const { name, border, backgroundColor, color, float, width } = this.props
        let style = {
            width: width ? width : '25%',
            height: '100%',
            border: border ? border : '0.5px solid #d3d3d3',
            borderRadius: '3.5px',
            backgroundColor: backgroundColor ? backgroundColor : '#fefefe',
            opacity: '0.8',
            fontFamily: 'Lato',
            fontSize: '0.8vw',
            fontWeight: '1000',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.24',
            letterSpacing: 'normal',
            textAlign: 'center',
            color: color ? color : '#2b2b2b',
            margin: '1% 2%',
            cursor: 'pointer',
            float: float ? float : undefined,
            whiteSpace: 'nowrap'
        }

        return (
            <button style={style} onClick={this.props.onClick}>
                {name ? name : 'Text'}
            </button>
        )
    }
}
