import React, { Component } from 'react'
import { connect } from 'react-redux'
//import './menu.css'
import menuStyle from './menu_style.less'
import BackOfficeCollapse from './backOffice-collapse'
import { menuList } from './navlinks'
import { get } from 'lodash'
class BackOfficeMenu extends Component {


    menuListLoop = () => {
        const { headerFlag } = this.props
        return (get(menuList, `${headerFlag}.list`, [])).map((e, index) =>
            <BackOfficeCollapse
                element={e}
                key={index} />);
    }
    render() {
        const { headerFlag } = this.props

        return (
            <div className={menuStyle.BackOfficeDiv}>
                <div style={{ display: 'flex', justifyContent: 'flex-center' }}>
                    <label className={menuStyle.BOmenuHeader}>{headerFlag}</label>
                </div>
                <hr className={menuStyle.MenuLine} />
                {this.menuListLoop()}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    headerFlag: state.App.headerFlag,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BackOfficeMenu)
