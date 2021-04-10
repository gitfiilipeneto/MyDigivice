import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import App from "../App"
import Hero from "../components/Hero"
import Ops404 from '../components/default404'


const Routes = () => {
    return (
       
            <Switch>
                <Route path="/" component={Hero} exact />

                <Route component={Ops404}/>
            </Switch>
       
    )
}
export default Routes
