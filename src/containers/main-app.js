import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './App_Header/lndex'
import NavMenu from './BackOffice/menu/menu'
import ModifierGroup from './../screens/modifier-groups/index'
import Nav_Location from './../components/Nav_Location'

class MainAPP extends Component {
    render() {
        const backOfficeBody = {
            display: 'grid' ,
            gridTemplateColumns: this.props.navMenuDisplay=='none'?'0% 100%':'15% 85%',
            backgroundColor: '#f6f6f6',
            height: '93%'
          }
        return (
            <div>
                <Header />
                <div style={backOfficeBody}>
                    <NavMenu />
                    <div style={{ padding: "1%" }}>
                    {/*     <ModifierGroup/> */}
                         <Nav_Location />
                       
                            {this.props.children} 
                      
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    navMenuDisplay: state.App.navMenuDisplay  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAPP)

