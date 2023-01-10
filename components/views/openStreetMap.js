
import React, { useState,useRef,useEffect  } from 'react';
import { SafeAreaView,Text } from 'react-native';
import Canvas, {Image as CanvasImage} from 'react-native-canvas';
import { PanGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated'
import * as mapUtils from '../utils/mapUtils'

export default function MapRender(){
    const ref = useRef(null);
    const [zoom, setZoom] = useState(16);
    const [startX, setStartX] = useState(mapUtils.lon2tile(2.333333,zoom));
    const [startY, setStartY] = useState(mapUtils.lat2tile(48.866667,zoom));
    const [loading,setLoading] = useState(false);

    async function loadMap(){
        const width = 2;
        const heigth = 2;
        const ctx = ref.current.getContext('2d');
        setLoading(true);
        for(let x = startX; x < width+startX;x++){
            for(let y = startY; y < heigth+startY; y++){
                const image = new CanvasImage(ref.current);
                image.src =  `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
                image.addEventListener('load', () => {
                    ctx.drawImage(image,(x-startX)*image.width, (y-startY)*image.height);
                });

            }
        }
        setLoading(false);
    }

    const handleGestureEvent = (event) => {
        if(!loading){
            if(event.nativeEvent.translationX < 0){
                setStartX(startX+1);
            }else{
                setStartX(startX-1);
            }
        }

    }

    useEffect(() => {
        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          ctx.canvas.height = 700;
          ctx.canvas.width = 400;
          if (ctx) {
            loadMap();
          }
        }
      }, [ref,startX,startY]);
    
    return (
        <PanGestureHandler onGestureEvent={handleGestureEvent} >
            <SafeAreaView style={{flex : 1 , marginTop: '10%'}}>
                    <Canvas  ref={ref} style={{ width: '100%', height: '50%', backgroundColor: 'black' }} onPre />
            </SafeAreaView>
        </PanGestureHandler>

    )
}