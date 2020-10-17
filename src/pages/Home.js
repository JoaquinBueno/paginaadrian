import React, {useEffect} from 'react'
import {Slider} from '../components/slider'
import {Collections} from '../components/collections'
import {Trending} from '../components/trending'
import './styles.css'
import { Hero } from '../components/hero'
import {WppButton} from '../components/wppButton'

export default function Home (props) {
    
    
    return(
        <>
            <Slider/>
            <Collections/>
            <div className='home-container'>
                <Trending/>
                <Hero/>
            </div> 
            <WppButton/>
            
        </>
    )
}