import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [

    { label: "name", type: 'text', value: "name", name: "name" },
    { label: "alter_name", type: 'text', value: "name", name: "alter_name" },
    { label: "floor_id", type: 'select', name: "floor_id", model: 'dinin', api: 'floors' },
]

export default class Zone extends Component {
    render() {
        return (
            <ScreenRender
                name="base sale"
                model="dinin"
                api="zones"
                fileds={fileds}
            />
        )
    }
}
