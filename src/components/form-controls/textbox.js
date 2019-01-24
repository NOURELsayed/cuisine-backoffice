import React, { Component } from 'react'
import { Input } from 'antd'
import { validate } from './validators';
import form_style from './form-controls.less'

export default class TextBox extends Component {
    state = {
        isValid: true
    }
    handelChange = (event) => {
        const { onChange, name, validators } = this.props
        onChange(event.target.value, name)

        this.setState({ isValid: validate(validators, event.target.value) })

    }

    componentDidMount() {
        const { name, onChange, edit, selectedRecord } = this.props
        if (edit) {
            onChange(selectedRecord, name)
        }
    }

    componentDidUpdate(pre) {
        const { name, onChange, selectedRecord } = this.props

        if (pre.selectedRecord != selectedRecord) {
            onChange(selectedRecord[name], name)
        }
    }

    render() {

        const { value, placeholder ,label } = this.props

        // alert(value)
        return (
            <div>
                <span className={form_style.text_name}>{label ? label : 'Name Here'}</span>
                <Input
                    defaultValue={value}
                    value={value}
                    onChange={this.handelChange}
                    placeholder={placeholder}
                    style={{ fontSize: '1vw', display: 'flex' }}

                />
            </div>

        )
    }

}
