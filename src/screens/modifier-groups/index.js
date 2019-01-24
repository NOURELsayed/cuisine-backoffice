import React, { Component } from 'react'
import mgStyle from './mg-style.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ModifierGroups extends Component {
    state = {
        transform: "rotate(0deg)",
        transitionDuration: ".4s",
    }

    activecollapse = () => {
        if (this.state.active == false) {
            this.setState({
                active: true,
                transform: "rotate(180deg)",
            })
        }
        else {
            this.setState({
                active: false,
                transform: "rotate(0deg)",
            })
        }
    }
    render() {
        return (
            <div className={mgStyle.MGdiv}>
                <table className={mgStyle.MGtable}>
                    <thead>
                        <tr>
                            <th className={mgStyle.MGTableHeader}>
                                <span>Base Sales Category</span>
                                <FontAwesomeIcon className={mgStyle.header_icon} icon='sort' />
                            </th>
                            <th className={mgStyle.MGTableHeader}>
                                <span> Sales Item</span>
                                <FontAwesomeIcon className={mgStyle.header_icon} icon='sort' />
                            </th>
                            <th className={mgStyle.MGTableHeader}>
                                <span>Unit of Measure</span>
                                <FontAwesomeIcon className={mgStyle.header_icon} icon='sort' />
                            </th>
                            <th className={mgStyle.MGTableHeader_input}>
                                <span> Price</span>
                   
                            </th>
                            <th className={mgStyle.MGTableHeader_input}>
                                <span>Free Weight Points</span>

                            </th>
                            <th style={{minWidth: '10%' , width: '10%' ,borderBottom: "1px solid #931066", padding: '0'}}>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <td className={mgStyle.mgTableTr}>
                                <select >
                                    <option value="volvo">Category</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <FontAwesomeIcon icon="chevron-down" className={mgStyle.select_icon} />
                            </td>

                            <td className={mgStyle.mgTableTr}>
                                <select >
                                    <option value="volvo">Item</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <FontAwesomeIcon icon="chevron-down" className={mgStyle.select_icon} />
                            </td>

                            <td className={mgStyle.mgTableTr}>
                            <select >
                                    <option value="volvo">Unit</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <FontAwesomeIcon icon="chevron-down" className={mgStyle.select_icon} />
                            </td>

                            <td className={mgStyle.mgTableTr_input}>
                                <input className={mgStyle.mgInput} placeholder="0" />
                            </td>
                            <td className={mgStyle.mgTableTr_input}>
                                <input className={mgStyle.mgInput} placeholder="0"/>
                            </td>
                            <td className={mgStyle.iconsDiv}>

                                <FontAwesomeIcon className={mgStyle.plus_icon} icon='plus' />

                            </td>
                        </tr>

                        <tr>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Category</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Sales Item</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Unit</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.iconsDiv}><FontAwesomeIcon className={mgStyle.trashalt_icon} icon='trash-alt' /></td>
                        </tr>
                        <tr>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Category</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Sales Item</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Unit</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.iconsDiv}><FontAwesomeIcon className={mgStyle.trashalt_icon} icon='trash-alt' /></td>
                        </tr>
                        <tr>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Category</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Sales Item</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr} onClick={() => this.activecollapse()}>
                                <div className={mgStyle.CollapseDiv}>
                                    <span>Unit</span>
                                    <FontAwesomeIcon icon="chevron-down" className={mgStyle.icon} style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                                </div>
                            </td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.mgTableTr}>0</td>
                            <td className={mgStyle.iconsDiv}><FontAwesomeIcon className={mgStyle.trashalt_icon} icon='trash-alt' /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
export default ModifierGroups;