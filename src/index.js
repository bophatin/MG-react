import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
/*import * as serviceWorker from './serviceWorker'*/

import App from './components/App'
import Archi from './components/Archi'
import Mode from './components/Mode'
import PageError from './components/PageError'
import Header from './components/Header'

import './css/index.css'


const Root = () => (
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/archi' component={Archi} />
        <Route path='/mode' component={Mode} />
        <Route component={PageError} />
    </Switch>
)


ReactDOM.render(
    <Router>
        <Root />
        <Header />
    </Router>, document.getElementById('root')
);

/*serviceWorker.unregister();*/
