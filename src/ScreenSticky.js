import React, {useEffect, useState, useRef} from 'react'
import {Controller, Scene} from 'react-scrollmagic'
import {Timeline, Tween} from 'react-gsap'
import Imac from './img/img/illu-imac.png'
import VideoLarge from './videos/video.mp4'

export default function ScreenSticky() {
  const videoRef = useRef(null);

  const [scrollEvent, setScrollEvent] = useState({});
  const [winHeight, setWinHeight] = useState(0);

  const [startHeight, setStartHeight] = useState(0);
  const [endHeight, setEndHeight] = useState(0);

  const [startWidth, setStartWidth] = useState(0);
  const [endWidth, setEndWidth] = useState(0);

  const startVideo = () => {
    videoRef.current.play();
  }

  const stopVideo = () => {
    videoRef.current.pause();
  }

  const setScrollState = (e) => {
    setScrollEvent(e);
  }

  const screenSize = () => {
    const ratio = 1920 / 1140;
    const winHeight = window.innerHeight;
    console.log(winHeight);

    const winWidth = window.innerWidth;
    console.log(winHeight);

    const newWidth = winHeight * ratio;
    console.log(newWidth);

    const endWidth = winWidth;
    console.log(endWidth);

    setStartHeight(`${winHeight * 0.8}px`);
    setEndHeight(`${winHeight * 1.33}px`);

    setStartWidth(`${newWidth * 0.8}px`);
    setEndWidth(`${endWidth * 1.33}px`);
  }

  // Calculate with the height:
  useEffect(() => {
    screenSize();

    const updateWindowDimensions = () => {
      screenSize();
      const winHeight = window.innerHeight;
      setWinHeight(winHeight);
      console.log("updating height");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)
  },[]);

  useEffect(() => {
    console.log(scrollEvent);

    if(scrollEvent.state === 'DURING') {
      return startVideo();
    }
    return stopVideo();
  }, [scrollEvent]);

  return(
    <>
      <div className='screen-div'/>

      <div className='screen-page'>
        <div className='screen-container'>
          <Controller>
            <Scene triggerElement='.screen-page' duration='100%' triggerHook={0} pin='.screen-page' indicators update>
              {(progress, e) => {
                setScrollState(e);
                return(
                  <Timeline totalProgress={progress} paused>
                    <Timeline target={
                      <img src={Imac} alt='' className='screen-img'/>
                    }>
                      <Tween from={{height: startHeight, width: startWidth}} to={{height: endHeight, width: endWidth}}/>
                    </Timeline>
                  </Timeline>
                )
              }}
            </Scene>
          </Controller>
          <div className='screen-video'>
            <video ref={videoRef} className='screen-video-content' muted loop>
              <source src={VideoLarge} type='video/mp4'/>
            </video>
          </div>
        </div>
      </div>

      <div className='screen-div'/>
    </>
  )
}