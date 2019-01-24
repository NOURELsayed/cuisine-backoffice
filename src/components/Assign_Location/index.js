import React, { Component } from 'react'
import './style.css'
export default class assign extends Component {
    render() {
        return (
            <div className='containerass'>
                <div className='header'>
                    <p className='ass'>Assign to Location </p>
                </div>

                <div style={{ height: '5%' }}></div>
                <div className='gridcon'>
                <div className='downdiv'>
                        <input className='searchclass' placeholder='Search Location' />
                    </div>
                </div>
            </div>

        )
    }
}
