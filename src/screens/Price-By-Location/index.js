import React, { Component } from 'react'
import './price-by-location.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Group from './group';

export default class PriceByLocation extends Component {
  state = {
    check: false,
    active: false,
    border: "none",
    display: "none",
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

  check = () => {
    if (this.state.display == "none") {
      this.setState({
        // border: '1px solid #e33e40',
        display: 'block'
      })
    }
    else {
      this.setState({
        // border: 'none',
        display: 'none'
      })
    }

  }

  render() {
    return (
      <div className="squre">
        <div className="search-row">
          <FontAwesomeIcon icon="search" className="icon" />
          <input type="text" placeholder="Search" />
        </div>



        <table className="btable">
          <thead>

            <tr className="btr">
              <th className="bth first" >Items</th>
              <th className="bth second" colspan="3">Apply to All</th>
              <th className="bth second" colspan="3">Chain 1 - Location 1</th>
              <th className="bth second" colspan="3">Chain 1 - Location 2</th>
            </tr>

            <tr className="btr">
              <th className="bth first"></th>

              <th className="bth third">Recipe Cost</th>
              <th className="bth third">New Price</th>
              <th className="bth fourth">Active</th>

              <th className="bth third">Current Price</th>
              <th className="bth third">New Price</th>
              <th className="bth fourth">Active</th>

              <th className="bth third">Current Price</th>
              <th className="bth third">New Price</th>
              <th className="bth fourth">Active</th>
            </tr>
          </thead>


          <tbody>

            <tr className="btr">
              <th className="bth">
                <div className="row-collapse" onClick={() => this.activecollapse()}>
                  <p>Base Sales Category</p>
                  <FontAwesomeIcon icon="chevron-down" className="icon" style={{ transform: this.state.transform, transitionDuration: this.state.transitionDuration }} />
                </div>
              </th>

              <td className="btd"> </td>
              <td className="btd"> </td>

              <td className="btd" style={{ border: this.state.border }}
                onClick={() => this.check()}>
                <FontAwesomeIcon style={{ display: this.state.display }} icon="check" />
              </td>

              <td className="btd"> </td>
              <td className="btd"> </td>

              <td className="btd" style={{ border: this.state.border }}
                onClick={() => this.check()}>
                <div className="active" style={{ display: this.state.display }}>
                  <FontAwesomeIcon style={{ display: this.state.display }} icon="check" />
                </div>

              </td>

              <td className="btd"> </td>
              <td className="btd"> </td>

              <td className="btd" style={{ border: this.state.border }}
                onClick={() => this.check()}>
                <FontAwesomeIcon style={{ display: this.state.display }} icon="check" />
              </td>

            </tr>

            {
              this.state.active ?
                <Group name="Sales Item 1" />
                : undefined
            }


            <tr className="btr">
              <th className="bth">
                <div className="row-collapse">
                  <p>Base Sales Category</p>
                  <FontAwesomeIcon icon="chevron-down" className="icon" />
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

            <tr className="btr">
              <th className="bth">
                <div className="row-collapse">
                  <p>Base Sales Category</p>
                  <FontAwesomeIcon icon="chevron-down" className="icon" />
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

            <tr className="btr">
              <th className="bth">
                <div className="row-collapse">
                  <p>Base Sales Category</p>
                  <FontAwesomeIcon icon="chevron-down" className="icon" />
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

          </tbody>
        </table>

      </div>
    )
  }
}
