import React, { Component } from 'react'
import ScreenRender from './../../containers/screen-render'

const fileds = [

    { label: "name", type: 'text', value: "name", name: "name" },
    { label: "alter_name", type: 'text', value: "name", name: "alter_name" },
    { label: "zoon_id", type: 'select', name: "zoon_id", model: 'dinin', api: 'zones' },
    { label: "capacity", type: 'number', value: "1", min:"1", max:"10", name: "capacity" },
    { label: "pos-x", type: 'number', value: "1", name: "pos-x" },
    { label: "pos-y", type: 'number', value: "1", name: "pos-y" },
    { label: "shape", type: 'text', value: "shape", name: "shape" },
]

export default class Table extends Component {
    render() {
        return (
            <ScreenRender
                name="base sale"
                model="dinin"
                api="tables"
                fileds={fileds}
            />
        )
    }
}
