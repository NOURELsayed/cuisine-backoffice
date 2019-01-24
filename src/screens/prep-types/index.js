import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [

    { label: "name", type: 'text', value: "15 min", name: "name" },
    { label: "alter_name", type: 'text', value: "15 min", name: "alter_name" },
    { label: "color", type: 'text', value: "color", name: "color" },

]

export default class Home extends Component {
    render() {
        return (
            <ScreenRender
                name="prep type"
                model="items"
                api="prep-types"
                fileds={fileds}
            />
        )
    }
}
