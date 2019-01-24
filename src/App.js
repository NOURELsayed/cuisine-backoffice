import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faEllipsisV, faChevronLeft, faSortAlphaDown,
  faCaretDown, faCalculator, faSync,
  faChevronDown, faStar, faCheckCircle, faBell,
  faBuilding, faArrowLeft, faCommentAlt, faBars,
  faCheck, faSearch, faCaretLeft, faCaretRight,
  faBolt, faPercent, faClock, faDollarSign, faTimes,
  faPlus, faTrashAlt, faAngleRight, faCalendarPlus,faCamera, faSort,faStopCircle
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.js'
// import 'antd/dist/antd.min.css'
// import 'antd/dist/antd.min.js'
import { Provider } from 'react-redux'
import store from './redux/store'

library.add(faStopCircle,faSort, faCircle, faEllipsisV, faChevronLeft, faSortAlphaDown, faCaretDown, faCalculator, faCalendarPlus, faSync, faChevronDown, faStar, faCheckCircle, faBell, faBars, faBuilding, faArrowLeft, faCommentAlt, faBolt, faCheck, faSearch, faPercent, faCaretLeft, faCaretRight, faClock, faDollarSign, faTimes, faPlus, faTrashAlt, faAngleRight,faCamera);

import Routes from './routes'
class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', backgroundColor: '#f6f6f6' }}>
        <Provider store={store}>

          <Routes />

        </Provider>
      </div>
    );
  }
}

export default App;
