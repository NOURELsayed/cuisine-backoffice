import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import Textbox from '../../components/Textbox/index'
import PhotoColor from '../../components/Photo-Color/index'
import Selectbox from '../../components/Selectbox/index'

export class Basic_Info extends Component {

    render() {
        return (
            <div className="grid-container">
                <div class="item1"><Textbox name="Name" /></div>
                <div class="item2"><Textbox name="Altername" /></div>
                <div class="item3"><PhotoColor /></div>
                <div class="item4"><Selectbox name="Base Sales Category" /></div>
                <div class="item5"><Selectbox name="Preparation Type" /></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Basic_Info)
