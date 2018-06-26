import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route path='/' render={ () => <div> I'm in routes.js </div> } />
    </Switch>
)
