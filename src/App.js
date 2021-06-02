import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Menu from './pages/Menu'

function App() {
    return (
        <div >
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/menu' exact component={Menu} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
