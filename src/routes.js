import React from 'react'
import { Switch, Route } from 'react-router-dom'
import checkout from './components/Checkout'

export default (
    <Switch>
        <Route path='/' component={ checkout } />
    </Switch>
)
