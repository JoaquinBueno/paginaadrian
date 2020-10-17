import React from 'react'
import './styles.css'

export const Backdrop = ({handler}) => {
    return(
        <div className='backdrop-menu' onClick={handler}>

        </div>
    )
}