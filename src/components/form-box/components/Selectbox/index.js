import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Select } from 'antd'

const Option = Select.Option;


export class SelectBox extends Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }


    render() {
        const { name } = this.props
        return (
            <div>
                <span className="name">{name ? name : 'Name Here'}</span>
                <div>
                    <Select defaultValue="lucy" style={{width:'100%'}} onChange={this.handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox)

