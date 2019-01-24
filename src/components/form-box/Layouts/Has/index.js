import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import Checkbox from '../../components/Checkbox/index'

export class Has extends Component {

    fileds = [
        { name: 'Doneness', value: false },
        { name: 'Scale', value: false },
        { name: 'Discount', value: true },
        { name: 'Service', value: true },
        { name: 'Item Tax', value: true },
        { name: 'Staff Meal', value: true }
    ]

    renderBody = () => {
        return (this.fileds || []).map((d, index) => {
            return <Checkbox name={d.name} value={d.value} key={index} />
        })
    }

    render() {
        return (
            <table className="checkbox_main">
                {this.renderBody()}
            </table>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Has)
