import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import Basic_Info from './Layouts/Basic_Info/index';
import Has from './Layouts/Has/index'


export class FormBoxContent extends Component {

    handleLayout = () => {
        const { layout } = this.props
        switch (layout) {
            case 'Basic Information':
                return <Basic_Info />
            case 'Has':
                return <Has />
        }
    }

    render() {
        const { layout } = this.props
        return (
            <div className="FB_Main">
                <div className="FB_header">{layout}</div>
                <div className="FB_HeaderBr" />
                {this.handleLayout()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FormBoxContent)
