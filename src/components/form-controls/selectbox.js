import React, { Component } from 'react'
import { Select } from 'antd';

import { connect } from 'react-redux'
import { selector } from './../../redux/actions/selector-actions'
import form_style from './form-controls.less'

const Option = Select.Option;

let apiname=''
class selectbox extends Component {


    handelChange = (event) => {
        const { onChange, name } = this.props
        onChange(event.target.value, name)
    }

    componentDidMount() {

        const { name, value, onChange, selector, model, api } = this.props
        selector(model, api, {})

        onChange(value, name)
    }

    handleChange = (value) => {
        const { name, onChange  } = this.props
        // console.log(`selected ${value}`);
        onChange(value, name)
    }

    renderOptions = () => {
        const { data, api } = this.props


        return (data[api] || []).map((d, index) => {

            return <Option key={index} value={d.id} style={{ width: '100%' }}>{d.name}</Option>
        })
    }

    componentDidUpdate(pre) {
        const { name, onChange, selectedRecord } = this.props

        if (pre.selectedRecord != selectedRecord) {
            onChange(selectedRecord[name], name)
        }
    }
    render() {


        const { value, name , label } = this.props
        apiname = name;
        return (
            <div>
                <span className={form_style.text_name}>{label ? label : 'Name Here'}</span>

                <Select
                    defaultValue={value || `Select One . . .. . . . . . `}
                    style={{ fontSize: '1vw', display: 'flex', width: '100%', minWidth: '90px' }}
                    onChange={this.handleChange}
                    // value={value }
                    placeholder="Select one .. . .. . . . .  ."

                >
                    {this.renderOptions()}
                </Select>

            </div>

        )
    }

}

const mapStateToProps = (state) => ({
    data: state.Selectors
})

const mapDispatchToProps = {
    selector
}

export default connect(mapStateToProps, mapDispatchToProps)(selectbox)
