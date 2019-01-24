import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControls from './../form-controls'

class Edit_Table extends Component {

    // Props: name
    //       two lists: headerList and dataList
    //       size="half"
    //       keys: fa-Arrow ,  fa-bin , fa-reset ,Checkbox

    state = {
        display: '',
        transform: "rotate(0deg)",
        // dropdownDisplay: 'none'
    }

    renderHeader = () => {
        const { fileds } = this.props

        return (fileds || []).map((d, index) => {
            return <th key={index} className="collapse_table_th">{d.label}</th>
        })
    }


    renderBody = () => {

        const { fileds, onChange, selectedRecord, edit ,values } = this.props

        return (fileds || []).map((d, index) => {
            return <td key={index}
                className="collapse_table_td"
            >
                <FormControls
                    {...d}
                    value={values[d.name]}
                    // defaultValue={edit ? selectedRecord[d.name] : values[d.name]}
                    // {...selectedRecord}
                    selectedRecord={selectedRecord}
                    edit={edit}
                    onChange={onChange}
                />
            </td>
        })

    }

    openClose = () => {
        if (this.state.display == "")
            this.setState({ display: 'none', transform: 'rotate(90deg)' })
        else this.setState({ display: '', transform: 'rotate(0deg)' })
    }



    render() {

        let tableStyle = {
            width: this.props.halfTable ? "50%" : "100%",
            margin: this.props.halfTable ? "0" : "auto",
            display: this.state.display
        }

        return (
            <div className="collapse_main">

                <div className="collapse_top" onClick={this.openClose}>
                    {this.props.name ? this.props.name : "Name here"}
                    <div style={{ float: 'right', transform: this.state.transform, transition: 'transform 0.2s' }}>
                        <FontAwesomeIcon icon="caret-down" size='2x' color='#707070' />
                    </div>
                    <div className="br"></div>
                </div>

                <table className="collapse_table" style={tableStyle} id="Table">
                    <tr>
                        {this.renderHeader()}
                    </tr>
                    <tr>
                        {this.renderBody()}
                    </tr>
                </table>

            </div>
        )
    }
}


export default (Edit_Table)
