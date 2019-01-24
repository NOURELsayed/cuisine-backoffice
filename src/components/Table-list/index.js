import React, { Component } from 'react'
import './table-list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CollapseRow from './../../components/Collapse/row'
// import { getTable } from './../../api'
import { connect } from 'react-redux'
import { bindTable, setRecordToEdit, bindCatTable } from './../../redux/actions/list-actions'
import Parent from '../Collapse/parent';
import { handleDisplay } from './../../redux/actions/app-actions'

class TableList extends Component {

  state = {
    selectall: false,

  }

  selectall = () => {
    this.setState({
      selectall: !(this.state.selectall)
    })
  }

  sortAscending = (array) => {
    array.sort()
  }

  componentDidMount() {
    const { model, api, bindTable, bindCatTable, multi } = this.props

    if (multi) {

      bindCatTable(multi.from.model, multi.from.api, {})

    }
    bindTable(model, api, {})
  }


  handelEdit = (item) => {

    const { setRecordToEdit } = this.props
    setRecordToEdit(item)

  }
  getFromCat = (id) => {
    const { list, multi: { match } } = this.props

    let filterdList = (list || []).filter(s => s[match] == id)
    console.log(filterdList)
    return filterdList.map((d, i) => {


      return <CollapseRow
      icon="circle"
        key={i}
        item={d}
        onClick={this.handelEdit}
      />
    })

  }
 
  renderItems = () => {
    const { multi } = this.props
    const { list, catList } = this.props
    if (multi) {
      return (catList || []).map((d, i) => {
        return <Parent icon="circle" key={i} name={d.name}>
          {this.getFromCat(d.id)}
        </Parent>
      })
    } else {
      return (list || []).map((d, i) => {
        return <CollapseRow
        icon="circle"
          key={i}
          item={d}
          onClick={this.handelEdit}
        />
      })
    }


  }

  render() {

    const { name, listDisplay } = this.props

    return (
      <div className="table-list" style={{ display: listDisplay }}>

        <div className="title">
          <button type="button">
            <FontAwesomeIcon icon="chevron-left" className="back-icon" />
          </button>
          <p className="list-table-header">{`  ${name}`}</p>

          <FontAwesomeIcon icon="ellipsis-v" className="more-icon" />

        </div>

        <div className="border"></div>

        <div className="table-list-search">
          <FontAwesomeIcon icon="search" className="icon" size="sm" />
          <input className="input-table-list" type="text" placeholder="Search" />
        </div>
        <div className="border"></div>

        <div className="collapse-div">

          {this.renderItems()}

        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  list: state.List.tableList,
  catList: state.List.catList,
  listDisplay: state.App.listDisplay
})

const mapDispatchToProps = {

  bindTable,
  setRecordToEdit,
  handleDisplay,
  bindCatTable
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList)
