import React, { Component } from 'react'
import './style.css'
import { Input } from 'antd'

export default class Textbox extends Component {
    render() {
        const { name } = this.props
        return (
            <div>
                <span className="name">{name?name:'Name Here'}</span>
                <Input />
            </div>
        )
    }
}
