import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from "../App"
import Ops404 from '../components/default404'


const Routes = () => {
    return (
       
            <Switch>
                <Route path="/" component={App} exact />

                <Route component={Ops404}/>
            </Switch>
       
    )
}
export default Routes
