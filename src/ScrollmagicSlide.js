import React, {useEffect, useState, useRef} from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Iphone from "./img/img/illu-iphone.png";
import Ipad from "./img/img/illu-ipad.png";
import Imac from "./img/img/illu-imac.png";

export default function ScrollmagicSlide() {

  const iphoneRef = useRef(null);
  const ipadRef = useRef(null);
  const imacRef = useRef(null);

  const [winHeight, setWinHeight] = useState(0);
  const [winWidth, setWinWidth] = useState(0);

  const [endImgLeft, setEndImgLeft] = useState(0);

  const vpSize = () => {
    const winHeightVp = window.innerHeight;
    const winWidthVp = window.innerWidth;

    setWinHeight(winHeightVp);
    setWinWidth(winWidthVp);
  }

  const imgExit = () => {
    console.log(winWidth);
    console.log(endImgLeft);

    console.log(iphoneRef.current.width);
    console.log(ipadRef.current.width);
    console.log(imacRef.current.width);

    const iphoneW = iphoneRef.current.width;
    const ipadW = ipadRef.current.width;
    const imacW = imacRef.current.width;

    const endLeft = -(iphoneW + ipadW + imacW) * 1.02;

    console.log(endLeft);

    setEndImgLeft(endLeft);
  }

  useEffect(() => {
    vpSize();
    imgExit();
  });
  // ========> BE CAREFUL HERE

  // useEffect(() => {
  //   setEndImgLeft(endImgLeft);
  // },[endImgLeft]);

  const updateWinSize = () => {
    console.log("resize function");
    vpSize();
    imgExit();
  }

  useEffect(() => {
    window.addEventListener('resize', updateWinSize);

    return () => window.removeEventListener('resize', updateWinSize);
  });

  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Controller>
          <Scene triggerElement="#slider" duration="250%" triggerHook={0} pin="#slider" indicators>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Timeline target={
                  <div id="slider" className="container-slider">
                    <img ref={iphoneRef} src={Iphone} alt="Iphone" className="img-slider iphone"/>
                    <img ref={ipadRef} src={Ipad} alt="Iphone" className="img-slider ipad"/>
                    <img ref={imacRef} src={Imac} alt="Iphone" className="img-slider imac"/>
                  </div>
                }>
                  <Tween from={{left: "100vw", top: '0'}} to={{left: endImgLeft, top: '10%', display: "none"}}/>
                </Timeline>
              </Timeline>
            )}
          </Scene>
        </Controller>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}

// le fond de l'image n'est pas bien proportionné lors du responsive
// le useEffect qui est censé ajouter la valuer du left est fausse