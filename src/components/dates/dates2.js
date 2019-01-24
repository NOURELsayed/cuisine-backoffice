// @flow strict

import * as React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class dates2 extends React.Component{
    render() {
        return (
            <div>
                    <div className="btnn">
                <FontAwesomeIcon className="circle" icon="stop-circle" />
                <text className="text">Repeat Annually</text>
                </div>
                <div className="btn">
                <FontAwesomeIcon className="circle" icon="circle" />
                <text className="Customize-Annually">Customize-Annually</text>
                </div>
            </div>
        );
    }
}

export default dates2;