import React, { useState } from 'react'
import '../styles/navbar.css'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import {ReorderOutlined} from '@material-ui/icons'

function NavBar() {

    const [openLinks, setOpenLinks] = useState(false)

    const handleClick = () => {
        setOpenLinks(!openLinks);
        //console.log(openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks? 'open' : 'false'} >
                <img src={Logo} alt='logo' />
                <div className='hiddenLinks' >
                    <Link to='/'> Home </Link>
                    <Link to='/menu'> Menu </Link>
                    <Link to='/about'> About </Link>
                    <Link to='/contact'> Contact </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'> Home </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact </Link>
                <button>
                    <ReorderOutlined onClick={handleClick} />
                </button>
            </div>
        </div>
    )
}

export default NavBar
