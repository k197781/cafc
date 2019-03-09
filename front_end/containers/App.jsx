import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import Images from './Images.jsx'
import reducers from '../modules/Reducers.js'

const initialState = {
  images: []
}
const store = createStore(reducers, initialState)

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={Images}/>
          </Switch>
        </BrowserRouter >
      </Provider>

    )}
}
