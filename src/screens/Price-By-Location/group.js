import React, { Component } from 'react'
import "./price-by-location.css"

export default class Group extends Component {
  render() {
    const { name } = this.props;
    return (
      <tr className="btr" >
        <th className="bth">
          <div className="row-collapse">
            <p>{name}</p>
          </div>
        </th>


        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
        <td className="btd"> </td>
      </tr>
    )
  }
}
