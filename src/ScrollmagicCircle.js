import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import {Timeline, Tween} from "react-gsap";
import Iphone from "./img/img/illu-iphone.png";

export default function ScrollmagicCircle() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main className="circle">
        <div className="container-circle-block-text"/>
        <Controller>
          <Scene triggerElement="main" duration="1400" offset="200" triggerHook={1} indicators={true}>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Timeline target={
                  <img src={Iphone} alt="" className="img-circle"/>
                }>
                  <Tween from={{rotate: "0"}} to={{rotate: "360deg"}}/>
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