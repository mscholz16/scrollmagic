import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function ScrollmagicText() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main className="text">
        <Controller>
          <Scene triggerElement="main" duration="100%" triggerHook={1} indicators={true}>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Timeline target={
                  <div id="text" className="container-text">
                    <h3 className="text-primary">
                      <span>La</span>
                      <span>transformation</span>
                      <span>digitale</span>
                      <span>!</span>
                    </h3>
                    <h3 className="text-primary">
                      <span>La</span>
                      <span>transformation</span>
                      <span>digitale</span>
                      <span>!</span>
                    </h3>
                    <h3 className="text-primary">
                      <span>La</span>
                      <span>transformation</span>
                      <span>digitale</span>
                      <span>!</span>
                    </h3>
                    <h3 className="text-primary">
                      <span>La</span>
                      <span>transformation</span>
                      <span>digitale</span>
                      <span>!</span>
                    </h3>
                    <h3 className="text-primary last">
                      <span>La</span>
                      <span>transformation</span>
                      <span>digitale</span>
                      <span>!</span>
                    </h3>
                  </div>
                }>
                  <Tween from={{left: "-25%"}} to={{left: "-175%"}}/>
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