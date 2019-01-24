import React, { Component } from 'react'
import { Checkbox, } from 'antd'
import style from './style.less'
import form_style from './../form-controls.less'

export default class CheckboxClass extends Component {

    // state = {
    //     checked: false,
    // }

    handelChange = (event) => {
        const { onChange, name } = this.props
        // this.setState({ checked: event.target.checked })
        onChange(event.target.checked, name)

    }

    componentDidMount() {
        const { name, value, onChange } = this.props
        // this.setState({ checked: value })
        onChange(value, name)
    }

    componentDidUpdate(pre) {
        const { name, onChange, selectedRecord } = this.props

        if (pre.selectedRecord != selectedRecord) {
            onChange(selectedRecord[name], name)
        }
    }
    render() {
        const { value, label } = this.props

        // alert(JSON.stringify(style))
        return (
            <div>
                <span className={form_style.text_name}>{label ? label : 'Name Here'}</span> <br/>
                
                <Checkbox
                    checked={value}
                    className={style.checkBox}
                    onChange={this.handelChange}

                />
            </div>


        );
    }
}


