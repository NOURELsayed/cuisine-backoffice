import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [
    { label: "name", type: 'text', value: "name", name: "name" },
    { label: "alter_name", type: 'text', value: "name", name: "alter_name" },
]

export default class Floor extends Component {
    render() {
        return (
            <ScreenRender
                name="base sale"
                model="dinin"
                api="floors"
                fileds={fileds}
            />
        )
    }
}
