import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import FormBoxContent from './formBox-content'

export class FormBox extends Component {

    render() {
        return (
            <div className="FB_Main">
                <FormBoxContent layout="Basic Information" />
                <FormBoxContent layout="Has" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FormBox)
