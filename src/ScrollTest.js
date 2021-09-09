import React from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import Img from './img/img/illu-imac.png'

export default function ScrollTest() {
  return(
    <>
      <div className='screen-div'/>

      <ParallaxProvider>
        <img src={Img} alt="" className=""/>
      </ParallaxProvider>

      <div className='screen-div'/>
    </>
  )
}