import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [


    { label: "Name", type: 'text', value: "name", name: "name" },
    { label: "Alter Name", type: 'text', value: "name", name: "alter_name" },
    { label: "Active", type: 'checkbox', value: false, name: "active" },

]
export default class Home extends Component {
    render() {
        return (
            <ScreenRender
                name="custom menu"
                model="items"
                api="custom-menu"
                fileds={fileds}
            />
        )
    }
}
