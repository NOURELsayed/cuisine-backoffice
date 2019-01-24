import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControls from './../form-controls'

export class Table_Collapse extends Component {

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

        const { fileds } = this.props

        return (fileds || []).map((d, index) => {
            return <td key={index} className="collapse_table_td"><FormControls {...d} /></td>
        })

    }
    // renderData = () => {
    //     const { dataList } = this.props
    //     return (dataList || []).map(d => {
    //         switch (d) {
    //             case "fa-arrow":
    //                 return <td className="collapse_table_td" onClick={this.openCloseDropdown}>
    //                             <FontAwesomeIcon icon="caret-down" size='2x' color='#707070' style={{ float: 'right' }} />
    //                             <div className="collapse_table_dropdown" >
    //                                 <p>Small</p>
    //                                 <p>Medium</p>
    //                                 <p>Large</p>
    //                             </div>
    //                         </td>
    //             case "fa-bin":
    //                 return <td className="collapse_table_td"><FontAwesomeIcon icon="trash-alt" size='2x' color='#ed282b' /></td>
    //             case "fa-reset":
    //                 return <td className="collapse_table_td"><FontAwesomeIcon icon="sync" size='2x' color='#ed282b' /></td>
    //             case "Checkbox":
    //                 return <td className="collapse_table_td"><input type="checkbox"  /></td>
    //             default:
    //                 return <td className="collapse_table_td">{d}</td>
    //         }
    //     })
    // }

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


export default (Table_Collapse)
