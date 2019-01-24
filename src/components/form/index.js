import React, { Component } from 'react'
import './style.css'
import BasicLayout from './../../components/form/layouts/basic'
import Button_Rectangle from './../../components/Button_Rectangle'
import { connect } from 'react-redux'
import { addNewRecord, editRecord } from './../../redux/actions/list-actions'
import { handleDisplay } from '../../redux/actions/app-actions'
import FormBox from '../form-box/index'
import FormControls from './../form-controls'
import './layouts/style.css'
import FormStyle from './form-style.less'
class FormComponent extends Component {


    state = {

    }

    validateForm = (value, key) => {
        this.setState({ [key]: value })
    }

    saveData = () => {
        const { model, api, addNewRecord, edit, editRecord, selectedRecord } = this.props

        if (!edit) {
            addNewRecord(model, api, { ...this.state })

        } else {

            const { id } = selectedRecord
            editRecord(model, api, id, this.state);
            // alert("shoud impelement updating")
        }

    }

    renderForm = (fileds, onChange, selectedRecord, edit, values) => {

        // const { fileds, onChange, selectedRecord, edit ,values } = this.props

        return (fileds || []).map((d, index) => {
            return <td key={index}
                className="collapse_table_td"
            >
                <FormControls
                    {...d}
                    value={values[d.name]}
                    // defaultValue={edit ? selectedRecord[d.name] : values[d.name]}
                    // {...selectedRecord}
                    selectedRecord={selectedRecord}
                    edit={edit}
                    onChange={onChange}
                />
            </td>
        })

    }

    render() {

        const { fileds, edit, selectedRecord, formDisplay, handleDisplay } = this.props

        return (
            <div style={{ marginLeft: '1%', display: formDisplay }}>
                <div className="Combo_up">

                    {selectedRecord ? selectedRecord.name : ""}
                    &nbsp; / &nbsp; ID #
                    {selectedRecord ? selectedRecord.id : ""}

                    <div className="Combo_buttonBox">
                        <Button_Rectangle
                            name='Cancel'
                            border="0.5px solid #ed282b"
                            color="#ed282b"
                            onClick={() => handleDisplay('none', '', '')} />
                        <Button_Rectangle
                            name='Save Draft'
                            border="0.5px solid #707070"
                            color="#707070" />
                        <Button_Rectangle
                            onClick={() => this.saveData()}
                            name='Save'
                            border="0.5px solid #ed282b"
                            color="#ffffff"
                            backgroundColor="#ed282b" />
                    </div>
                    <div className="Combo_buttonBox"
                        style={{ width: '25%', borderRight: '1px solid rgba(118, 111, 111, 0.36)' }}>
                        <Button_Rectangle name='Export' width='40%' />
                        <Button_Rectangle name='Print' width='40%' />
                    </div>

                </div>
                <div className={FormStyle.form}>
                    <BasicLayout
                        name="Basic Information"
                        fileds={fileds}
                        onChange={this.validateForm}
                        edit={edit}
                        selectedRecord={selectedRecord}
                        values={this.state}
                        renderForm={this.renderForm}
                    />
                </div>
                {/* <FormBox /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    edit: state.List.edit,
    selectedRecord: state.List.selectedRecord,
    formDisplay: state.App.formDisplay
})

const mapDispatchToProps = {
    addNewRecord,
    editRecord,
    handleDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
