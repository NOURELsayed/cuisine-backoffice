import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [


    { label: "Name", type: 'text', value: "name", name: "name" },
    { label: "Alter Name", type: 'text', value: "name", name: "alter_name" },
    { label: "Custom Menu", type: 'select', name: "custom_menu", model: 'items', api: 'custom-menu' },
    { label: "Active", type: 'checkbox', value: false, name: "active" },

]
export default class Home extends Component {
    render() {
        return (
            <ScreenRender
                name="base sale"
                model="items"
                api="base-sales-cat"
                fileds={fileds}
                multi={{ from: {model:'items' , api:'custom-menu'}, match: 'custom_menu' }}
            />
        )
    }
}
