import React, { Component } from 'react'
import './style.css'
import Borderless from './borderless-btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../../assets/images/Logo Topbar@3x.png';
import { menuList } from './../BackOffice/menu/navlinks'
export default class Header extends Component {
    render() {
        let boTypes = (Object.values(menuList)).map((d, index) => <Borderless key={index} width='9%' height='90%' name={d.name} background />);

        return (
            <div className='logo-types'>
                <div className='logo-word'>
                    <img className='image-logo' src={Logo} />
                    <p className='back-word'>Back Office </p>
                </div>
                <div className='Bo-Header'>
                    {boTypes}
                </div>
                <div className='input-Dbtn'>
                    <FontAwesomeIcon className="icon-searchinput" icon="search" size="sm" />
                    <input style={{ color: '#bbbbbb' }} placeholder='Search'></input>
                    <button>D</button>
                </div>
            </div>


        )
    }

}

