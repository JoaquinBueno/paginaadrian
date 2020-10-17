import React, {useState} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import './styles.css'

export const Slider =()=> {
    const [slide, setSlide] = useState(0)

    const onSlideHandlerNext = () => {
        if (slide === 0){
            setSlide(1)
        } else if (slide === 1){
            setSlide(2)
        } else {
            setSlide(0)
        }
    }

    const onSlideHandlerBack = () => {
        if (slide === 0){
            setSlide(2)
        } else if (slide === 1){
            setSlide(0)
        } else {
            setSlide(1)
        }
    }

    const sliderChange = () => {
        if (slide === 0){
            return <img src='/assets/slider/imagen1.jpg' alt='Imagen slider' className='slider-img'/>
        } else if (slide === 1) {
            return <img src='/assets/slider/imagen2.jpg' alt='Imagen slider 2' className='slider-img'/>
        } else {
            return <img src='/assets/slider/imagen3.jpg' alt='Imagen slider 3' className='slider-img'/>
        }
    }

    return(
        <div className='slider-container'>
            <div className='arrow-container' onClick={onSlideHandlerBack}>
                <div className='arrow-btn'>
                    <IoIosArrowBack size='20px'/>
                </div>
                <div className='arrow-btn' onClick={onSlideHandlerNext}>
                    <IoIosArrowForward size='20px'/>
                </div>
            </div>
            {
                sliderChange()
            }
        </div>
    )
}