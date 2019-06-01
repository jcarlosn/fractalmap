import React from 'react';
import './App.css';
import {Color, SceneMode} from 'cesium';
import {Viewer, Globe, Scene} from 'resium';
import mandelbrotImageryProvider from './provider/mandelbrotImageryProvider';

function App() {
  return (
    <Viewer 
      animation={false} 
      baseLayerPicker={false}
      timeline={false}
      navigationHelpButton={false}
      imageryProvider={new mandelbrotImageryProvider()}
      creditContainer="credits"
      creditViewport="credits"
      skyBox={false}
      terrainProvider={null}
      skyAtmosphere={false}
      homeButton={false}
      geocoder={false}
      sceneMode={SceneMode.SCENE2D}
      sceneModePicker={false}
      full>
        
        <Scene 
        sun={undefined} 
        backgroundColor={new Color(0,0,0.303)}
        />

        <Globe 
        fillHighlightColor={new Color(0, 0, 0)} 
        enableLighting={false} 
        baseColor={new Color(0.3, 0.7,0.9)} 
        atmosphereHueShift={0.1}
        atmosphereSaturationShift={0}
        atmosphereBrightnessShift={0}
        lightingFadeOutDistance={0}
        showGroundAtmosphere={false}
        />
    </Viewer>
  );
}

export default App;
