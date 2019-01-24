import React, { Component } from 'react'
import { InputNumber } from 'antd'

export default class Inputnumber extends Component {

    handelChange = (value) => {
        const { onChange, name } = this.props
        onChange(value, name)
    }


    render() {

        return (
            <InputNumber
                placeholder={this.props.placeholder}
                onChange={this.handelChange}
                value={this.props.value}
                style={this.props.style}
                min={this.props.min}
                max={this.props.max}
            />
        )
    }
}
