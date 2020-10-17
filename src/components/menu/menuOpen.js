import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

export const MenuOpen = ({handler}) => {
    return(
        <div className='menu-open-cont'>
            <div className='menu-link-cont'>
                <div className='link-cont'>
                    <Link to='/buzos' className='menu-link menu-link2' onClick={handler}>
                        Buzos
                    </Link>
                </div>
                <div className='link-cont'>
                    <Link to='/camperas' className='menu-link menu-link2' onClick={handler}>
                        Camperas
                    </Link>
                </div>
                <div className='link-cont'>
                    <Link to='/canguros' className='menu-link menu-link2' onClick={handler}>
                        Canguros
                    </Link>
                </div>
                {/* <div className='link-cont'>
                    <Link to='/chombas' className='menu-link menu-link2' onClick={handler}>
                        Chombas
                    </Link>
                </div> */}
                {/* <div className='link-cont'>
                    <Link to='/jeans' className='menu-link menu-link2' onClick={handler}>
                        Jeans
                    </Link>
                </div> */}
                <div className='link-cont'>
                    <Link to='/joggins' className='menu-link menu-link2' onClick={handler}>
                        Joggins
                    </Link>
                </div>
                <div className='link-cont'>
                    <Link to='/joggers' className='menu-link menu-link2' onClick={handler}>
                        Joggers
                    </Link>
                </div>
                <div className='link-cont'>
                    <Link to='/remeras' className='menu-link menu-link2' onClick={handler}>
                        Remeras
                    </Link>
                </div>
            </div>
        </div>
    )
}