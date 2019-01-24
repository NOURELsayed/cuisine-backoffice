import React, { Component } from 'react'
import { connect } from 'react-redux'
import menuStyle from './menu_style.less'
import { withRouter } from 'react-router-dom';
import { menuFlagHandle, handleDisplay } from '../../../redux/actions/app-actions'

export class subMenu extends Component {

    subOnClickHandle = (eSub) => {
        const { history, menuFlagHandle, handleDisplay } = this.props
        history.push(eSub.path)
        menuFlagHandle(eSub.name)
        handleDisplay('','','')
    }


    render() {
        const { eSub, menuFlag } = this.props
        const style = {
            color: menuFlag == this.props.eSub.name ? '#e33e40' : '#838383',
            backgroundColor: menuFlag == eSub.name ? '#e6dbdb' : '#f8f8f8'
        };
        return (
            <div className={menuStyle.SubMenu}
                style={style}
                onClick={() => this.subOnClickHandle(eSub)}>
                {eSub.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuFlag: state.App.menuFlag
})

const mapDispatchToProps = {
    menuFlagHandle,
    handleDisplay
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(subMenu)
export default withRouter(wrapper)