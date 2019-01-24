import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import { menuFlagHandle  , handleDisplay} from '../../../redux/actions/app-actions'
import SubMenu from './subMenu'
import menuStyle from './menu_style.less'
class BackOfficeCollapse extends Component {
    state = {
        display: 'none',
        color: '#838383',
        backgroundColor: '#f8f8f8'
    }
    openCollapse = () => {
        const { history, menuFlagHandle, element } = this.props
        if (this.props.element.sub) {
            if (this.state.display == 'none') {
                this.setState({
                    display: 'block',
                    color: '#f6f6f6',
                    backgroundColor: '#fe534c'
                })
            }
            else {
                this.setState({
                    display: 'none',
                    color: '#838383',
                    backgroundColor: '#f8f8f8'
                })
            }
        }
        else {
            history.push(element.path)
            menuFlagHandle(element.name)
            handleDisplay('','','none')
        }
    }

    componentWillReceiveProps() {
        const { menuFlag, element } = this.props
        if (menuFlag == element.name) {
            this.setState({
                color: '#f6f6f6',
                backgroundColor: '#fe534c'
            })
        }
        else {
            this.setState({
                color: '#838383',
                backgroundColor: '#f8f8f8'
            })
        }
    }
    render() {

      
        const { element } = this.props
        let submenuListLoop = element.sub ? element.sub.map((eSub, index) =>
            <SubMenu key={index} eSub={eSub} />) : undefined
        return (
            <div>
                <div className={menuStyle.BOMenuDiv}
                    style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }}
                    onClick={() => this.openCollapse()} >
                    <FontAwesomeIcon className={menuStyle.backoffice_icon} icon={element.iconName} />
                    <p style={{ whiteSpace: 'nowrap' }}>{element.name}</p>
                    <FontAwesomeIcon className={menuStyle.Caret_icon} icon='chevron-down' />
                </div>
                <div className={menuStyle.subMenuBorder} style={{ display: this.state.display }}>
                    {submenuListLoop}
                </div>
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

const wrapper = connect(mapStateToProps, mapDispatchToProps)(BackOfficeCollapse)
export default withRouter(wrapper)