import React from 'react'
import '../styles/menu.css'
import MenuItem from '../components/MenuItem'
import {MenuList} from '../helpers/MenuList'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'> Our Menu </h1>
            <div className='menuList'>
                {
                    MenuList.map(item => (
                        <MenuItem  name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default Menu
