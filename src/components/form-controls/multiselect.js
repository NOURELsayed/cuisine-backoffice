import React, { Component } from 'react'
import { Select } from 'antd';


export default class Multiselect extends Component {

  componentDidMount() {
    const { name, value, onChange } = this.props
    onChange(value, name)
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { name, value, onChange } = this.props

    return (
      
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={[value]}
        onChange={this.handleChange}
      >
        <Option value="Small">Small</Option>
        <Option value="Medium">Medium</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Large">Large</Option>
      </Select>

    );
  }
}

