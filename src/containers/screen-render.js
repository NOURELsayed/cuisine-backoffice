import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableList from './../components/Table-list'
import Form from './../components/form'
import PriceByLocation from './../screens/Price-By-Location/index'
class ScreenRender extends Component {
    render() {
        const backOfficeSubbody= {
            display: 'grid' ,
            gridTemplateColumns: this.props.formDisplay=="" && this.props.listDisplay==""?'25% 75%':'100% 0%',
            backgroundColor: '#f6f6f6',
            height: '88%'
        }
        return (
            <div style={backOfficeSubbody}>
                <TableList
                   {...this.props}
                />

                <PriceByLocation />

                {/* <Form
                    {...this.props}
                /> */}

            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    formDisplay: state.App.formDisplay,
    listDisplay: state.App.listDisplay

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenRender)