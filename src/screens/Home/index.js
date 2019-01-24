import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [


    { label: "name", type: 'text', name: "name", placeholder: 'Name' ,validators:['mail'] },
    { label: "Alter name", type: 'text', name: "alter_name", placeholder: 'Alter Name' },
    { label: "Enable Fraction", type: 'checkbox', name: "enable_fraction", },
    { label: "Active", type: 'checkbox', name: "active", placeholder: 'Is Active' },
    // { label: "dsads", type: 'select', name: "active", placeholder: 'Is Active' , model:'items' , api:'base-sales-cat' },


]
export default class Home extends Component {
    render() {
        return (
            <ScreenRender
                name="sales unit"
                model="items"
                api="sales-unit"
                fileds={fileds}
            />
        )
    }
}
