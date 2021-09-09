import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/main.scss';
import ScrollmagicSlide from "./ScrollmagicSlide";
import ScrollmagicText from "./ScrollmagicText";
import ScrollmagicCircle from "./ScrollmagicCircle";
import ScrollmagicScreen from "./ScrollmagicScreen";
import ScreenSticky from "./ScreenSticky";
import ScrollTest from "./ScrollTest";

ReactDOM.render(
  <React.StrictMode>
    {/*<ScrollmagicSlide/>*/}
    <ScrollmagicText/>
    {/*<ScrollmagicCircle/>*/}
    {/*<ScrollmagicScreen/>*/}
    {/*<ScreenSticky/>*/}
    {/*<ScrollTest/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
