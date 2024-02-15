import React, { useEffect } from 'react';
import MainPage from './v2/MainPage';
import { Application } from '@splinetool/runtime';
import { MOBILE_DEVICE_WIIDTH } from './helper/DeviceViewToggle';

function App() {
  useEffect(() => {
    if (window.innerWidth > MOBILE_DEVICE_WIIDTH) {
      enableCanvas3d()
    } 
  }, []);
  return (
    <MainPage/>
  );
}

const enableCanvas3d = () => {
  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/u7rmwNQAMJplkoy6/scene.splinecode');
};

export default App;
