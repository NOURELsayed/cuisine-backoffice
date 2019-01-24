import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
// import Textbox from '../../components/Textbox/index'
// import PhotoColor from '../../components/Photo-Color/index'
// import Selectbox from '../../components/Selectbox/index'

export class Basic_Info extends Component {

    renderControls = () => {

        const { fileds, onChange, selectedRecord, edit, values, renderForm } = this.props

        return renderForm(fileds, onChange, selectedRecord, edit, values)
    }

    render() {
        return (

            <div className="FB_Main">
                <div className="FB_header">{"layout"}</div>
                <div className="FB_HeaderBr" />
                <div className="basic-form-grid-container">
                    {
                        this.renderControls()
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Basic_Info)
