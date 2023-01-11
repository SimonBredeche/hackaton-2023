
import React, { useState,useRef,useEffect  } from 'react';
import { SafeAreaView,Text,TouchableWithoutFeedback,View } from 'react-native';
import Canvas, {Image as CanvasImage} from 'react-native-canvas';
import { PanGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import { Points } from '../fakeData/fakepoint';
import { styles } from '../styles/globalStyle';
import { Asset } from 'expo-asset';
import * as mapUtils from '../utils/mapUtils'
const arrowBoundingBox = {};
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 510;
const markerDefault = {
    'name': '-',
    'number': '-',
    'offSetX': '-',
    'offSetY': '-'
}

export default function MapRender(){
    const ref = useRef(null);
    const [boundingBox,setBoundingBox] = useState([]);
    const [zoom, setZoom] = useState(17);
    const [startX, setStartX] = useState(mapUtils.lon2tile(2.333333,zoom));
    const [startY, setStartY] = useState(mapUtils.lat2tile(48.866667,zoom));
    const [marker,setMarker] = useState(markerDefault);
    const [loading,setLoading] = useState(false);

    async function loadMap(){
        const width = 2;
        const heigth = 2;
        const ctx = ref.current.getContext('2d');
        ctx.clearRect(0,0,400,700);
        setLoading(true);
        let pointToDraw = [];
        let tempBounding = [];
        for(let x = startX; x < width+startX;x++){
            for(let y = startY; y < heigth+startY; y++){
                const image = await loadImage(`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`);
                ctx.drawImage(image,(x-startX)*image.width, (y-startY)*image.height);
                if(Points[`${x}_${y}`] != undefined){
                    Points[`${x}_${y}`].forEach(marker => {
                        let markerTemp = {...marker}
                        markerTemp.offSetX += (x-startX)*image.width;
                        markerTemp.offSetY += (y-startY)*image.height;
                        pointToDraw.push(markerTemp);
                        tempBounding.push(mapUtils.createRectangle({width:100,height:100},markerTemp));
                    });
                }   
            }
        }
        setBoundingBox(tempBounding);
        pointToDraw.forEach(marker => {
            drawMarker(marker,ctx,false);
        });
        await drawArrow();
        setLoading(false);
    }

    const loadImage = path => {
        return new Promise((resolve, reject) => {
          const img = new CanvasImage(ref.current);
          img.src = path
          img.addEventListener('load', () => {
            resolve(img)
          })
        })
      }

    async function drawArrow(){
        const ctx = ref.current.getContext('2d');
        let rightArrow = Asset.fromModule(require('../../assets/arrow_right.png'));
        let leftArrow = Asset.fromModule(require('../../assets/arrow_left.png'));
        let topArrow = Asset.fromModule(require('../../assets/arrow_top.png'));
        let bottomArrow = Asset.fromModule(require('../../assets/arrow_bottom.png'));
        const imageLeft = await loadImage(leftArrow.uri);
        const imageRight = await loadImage(rightArrow.uri);
        const imageTop = await loadImage(topArrow.uri);
        const imageBottom = await loadImage(bottomArrow.uri);
        ctx.drawImage(imageLeft,0, CANVAS_HEIGHT/2 - imageLeft.height/2);
        arrowBoundingBox.left = {
            width : imageLeft.width,
            height: imageLeft.height,
            x: 0,
            y: CANVAS_HEIGHT/2 - imageLeft.height/2
        }
        ctx.drawImage(imageRight,CANVAS_WIDTH - imageRight.width, CANVAS_HEIGHT/2 - imageRight.height/2);
        arrowBoundingBox.right = {
            width : imageRight.width,
            height: imageRight.height,
            x: CANVAS_WIDTH - imageRight.width,
            y: CANVAS_HEIGHT/2 - imageRight.height/2
        }
        ctx.drawImage(imageTop,CANVAS_WIDTH/2 - imageTop.width/2, 0);
        arrowBoundingBox.top = {
            width : imageTop.width,
            height: imageTop.height,
            x: CANVAS_WIDTH/2 - imageTop.width/2,
            y: 0
        }
        ctx.drawImage(imageBottom,CANVAS_WIDTH/2 - imageBottom.width/2, CANVAS_HEIGHT-imageBottom.height);
        arrowBoundingBox.bottom = {
            width : imageBottom.width,
            height: imageBottom.height,
            x: CANVAS_WIDTH/2 - imageBottom.width/2,
            y: CANVAS_HEIGHT-imageBottom.height
        }

    }

    async function drawMarker(marker,ctx,selected){
        let asset = Asset.fromModule(require('../../assets/marker.png'));
        if(selected){
            asset = Asset.fromModule(require('../../assets/marker_green.png'));
        }
        const imageMarker = await loadImage(asset.uri);
        ctx.drawImage(imageMarker,marker.offSetX, marker.offSetY);
    }
    

    const handleGestureEvent = (event) => {
        const clientX = event.nativeEvent.locationX;
        const clientY = event.nativeEvent.locationY;
        const ctx = ref.current.getContext('2d');
        boundingBox.forEach(rectangle => {
            if(mapUtils.isColliding(rectangle,clientX,clientY)){
                if(marker.offSetX == '-' && marker.offSetY == '-'){
                    drawMarker(rectangle.marker,ctx,true)
                }else{
                    drawMarker(marker,ctx,false)
                    drawMarker(rectangle.marker,ctx,true)
                }
                setMarker(rectangle.marker);
            }
        });
        if(mapUtils.isColliding(arrowBoundingBox.left,clientX,clientY)){
            setStartX(startX-1);
            setMarker(markerDefault);
        }
        if(mapUtils.isColliding(arrowBoundingBox.right,clientX,clientY)){
            setStartX(startX+1);
            setMarker(markerDefault);
        }
        if(mapUtils.isColliding(arrowBoundingBox.top,clientX,clientY)){
            setStartY(startY-1);
            setMarker(markerDefault);
        }
        if(mapUtils.isColliding(arrowBoundingBox.bottom,clientX,clientY)){
            setStartY(startY+1);
            setMarker(markerDefault);
        }

    }

    useEffect(() => {
        if (ref.current) {
          const ctx = ref.current.getContext('2d');
          ctx.canvas.height = 800;
          ctx.canvas.width = 400;
          if (ctx) {
            loadMap();
          }
        }
      }, [ref,startX,startY]);
    
    return (
        <TouchableWithoutFeedback  onPress={handleGestureEvent}  >
            <SafeAreaView style={{flex : 1}}>
                    <Canvas  ref={ref} style={{ width: '100%', height: '71%', backgroundColor: 'black' }}  />
                    <View style={[styles.container1,styles.shadowProp]}>
                        <Text style={styles.textSize}> Evenement : {marker.name}</Text>
                        <Text style={styles.textSize}> Nombre de personne : {marker.number} </Text>
                    </View>
            </SafeAreaView>
        </TouchableWithoutFeedback >

    )
}