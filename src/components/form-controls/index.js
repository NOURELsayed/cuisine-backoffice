
import React, { Component } from 'react'
import Textbox from './textbox'
import Select from './selectbox'
import CheckboxClass from './checkbox'
import Multiselect from './multiselect'
import InputNumber from './input-number'

export default class FormControlsRender extends Component {


    renderControls = () => {

        const { type, value, } = this.props
       
        switch (type) {

            case 'text':
                return <Textbox {...this.props} />
            case 'select':
                return < Select {...this.props} />
            case 'checkbox':
                return <CheckboxClass {...this.props} />
            case 'mutliselect':
                return <Multiselect {...this.props} />
                case 'number':
                return <InputNumber {...this.props} />
            default:
                return <div>{value}</div>
        }



    }

    render() {
        return this.renderControls()
    }
}
