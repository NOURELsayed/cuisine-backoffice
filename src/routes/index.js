import React from 'react';
// import ReactDom from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import AppContainer from './containers/app-container';


import Login from './../screens/login'
import Home from './../screens/Home'
import BaseSale from './../screens/base-sales-cat'
import CustomMenu from './../screens/custom-menu'
import PrepType from './../screens/prep-types'
import Floor from './../screens/floor'
import Zone from './../screens/zones'
import Table from './../screens/tables'
import Tabs from './../components/tabs'
import AppContainer from './../containers/main-app'
import Ass from './../components/Assign_Location/index'
// import Index from './../components/dates/index'
import Dates from './../components/dates/dates'
const Routes = () => (

    <HashRouter >
        <AppContainer>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/basesale" component={BaseSale} />
                <Route exact path="/custommenu" component={CustomMenu} />
                <Route exact path="/preptype" component={PrepType} />
                <Route exact path="/floor" component={Floor} />
                <Route exact path="/zone" component={Zone} />
                <Route exact path="/table" component={Table} />
                <Route exact path="/Tabs" component={Tabs} />
                <Route exact path="/Ass" component={Ass} />
                <Route exact path="/dates" component={Dates} />
                {/* <Route exact path="/index" component={Index} /> */}
            </Switch>
        </AppContainer>
    </HashRouter>


);

export default Routes;

