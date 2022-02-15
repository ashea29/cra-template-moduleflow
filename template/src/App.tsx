import React from 'react'
import { Route, Switch } from 'react-router-dom'
import views from './Modules/Views/viewExports'
import { Redirect } from "react-router";

import './App.css'


interface View {
  routeProps: {
    path: string
    exact?: boolean
    component: React.FC<{}>
  },
  name: string
  protectedRoute: boolean
}

const App: React.FC = () => {
  return (
    <React.Fragment> 
      <Switch>
        {views.map((view: View, index: number) => (
          <Route {...view.routeProps} key={index}/>
        ))}
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
