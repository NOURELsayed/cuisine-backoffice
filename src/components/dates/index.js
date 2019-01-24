// @flow strict

import * as React from 'react';
import Dates from './dates'
import Dates2 from './dates2'

class index extends React.Component{
    render() {
        return (
            <div>
                <Dates/>
                <Dates2/>
            </div>
        );
    }
}

export default index;