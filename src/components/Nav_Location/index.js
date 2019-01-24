import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { handleDisplay } from '../../redux/actions/app-actions'

class Nav_Location extends Component {

  render() {
    const { headerFlag, menuFlag, selectedRecord } = this.props
    return (
      <div className="NavLocation_font">
        {headerFlag ? headerFlag : ''} 	&nbsp; > 	&nbsp; {menuFlag ? menuFlag : ''} 	&nbsp;  > 	&nbsp;
        <span className="NavLocation_fontBigger">{selectedRecord ?selectedRecord.name:''}</span>
        <div className="NavLocation_line"></div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  headerFlag: state.App.headerFlag,
  menuFlag: state.App.menuFlag,
  selectedRecord: state.List.selectedRecord
})

const mapDispatchToProps = {
  handleDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav_Location)
