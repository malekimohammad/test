import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Add from './components/Add'
import WatchList from './components/WatchList'
import Watched from './components/Watched'
import './lib/font-awesome/css/all.min.css'
import { GlobaProvider } from './context/GlobalState'

const App = () => {

    return (
        <>
            <GlobaProvider>
                <Router>
                    <Switch>
                        <Route exact path="/"><WatchList /></Route>
                        <Route path="/watched"><Watched /></Route>
                        <Route path="/add"><Add /></Route>
                    </Switch>
                </Router>
            </GlobaProvider>
        </>
    )
}

export default App
