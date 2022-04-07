import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from "../App"
import AppContext from '../components/AppContext'
import Ops404 from '../components/default404'


const Routes = () => {
    return (
       
            <Switch>
                <Route path="/" component={AppContext} exact />

                <Route component={Ops404}/>
            </Switch>
       
    )
}
export default Routes
