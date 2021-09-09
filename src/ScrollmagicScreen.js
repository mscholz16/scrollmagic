import React from "react";
import {Controller, Scene} from "react-scrollmagic";
import {Timeline, Tween} from "react-gsap";
import Imac from "./img/img/illu-imac.png";

export default function ScrollmagicScreen() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main className="screen">
        <Controller>
          <Scene triggerElement=".screen" duration="100%" triggerHook={0} pin="#screen" indicators={true}>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Timeline target={
                  <img src={Imac} alt="" className="img-screen" id="screen"/>
                }>
                  <Tween from={{height: "80vh", width: "80vw"}} to={{display: "none", height: "128vh", width: "140vw"}}/>
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