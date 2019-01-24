import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './style.css'
import Button_Rectangle from '../../components/Button_Rectangle/index'
import { Combo_Collapse } from '../../components/Combo_Collapse';

export default class Combo extends Component {

  render() {
    return (
      <div className="Combo_main">

        <div className="Combo_up">
          Combo Long Name / ID #12
            <div className="Combo_buttonBox">
            <Button_Rectangle name='Export' />
            <Button_Rectangle name='Print' />
            <Button_Rectangle name='Cancel' border="0.5px solid #ed282b" color="#ed282b" />
            <Button_Rectangle name='Save' border="0.5px solid #ed282b" color="#ffffff" backgroundColor="#ed282b" />
          </div>
        </div>

        <div className="Combo_Box">
          <Combo_Collapse
            name="Basic Information"
            headerList={["ID", "Name", "Altername", "Price", "Size", "Group", "Prep Time"]}
            dataList={["1", "", "", "$", "fa-arrow", "fa-arrow", ""]}
          />

          <Combo_Collapse
            name="Base Items"
            headerList={["Item", "Item Group", "Size", "Qty", "Single Side", "Has Alternatives", ""]}
            dataList={["fa-arrow", "fa-arrow", "fa-arrow", "", "Checkbox", "Checkbox", "fa-bin"]}
          />

          <Combo_Collapse
            name="Sizes"
            headerList={["Name", "Altername", "", ""]}
            dataList={["","","fa-reset","fa-bin"]}
            halfTable
          />
        </div>

      </div>
    )
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Combo)
