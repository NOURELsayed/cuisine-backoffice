import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class CheckBox extends Component {

    render() {
        const { name, value, index } = this.props
        return (
            <tr>
                <td className="checkbox_head">{name}</td>
                <td key={index} className="checkbox_body" style={{ backgroundColor: value ? '#fe534c' : '#efefef' }}>
                    <FontAwesomeIcon icon="check" size="s" color={value ? '#ffffff' : "#b7b7b7"} />
                </td>
            </tr>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox)
