import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App
