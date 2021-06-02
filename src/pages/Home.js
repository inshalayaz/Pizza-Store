import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'  >
                <h1> Awesome Pizza!!! </h1>
                <p>We've Got Some Awesome Pizza's :D</p>
                <Link to='/menu'>
                    <button> Order Now!!! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
