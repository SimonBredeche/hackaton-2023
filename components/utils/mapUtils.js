export function lon2tile(lon,zoom) { 
    return (Math.floor((lon+180)/360*Math.pow(2,zoom)));
}

export function lat2tile(lat,zoom)  { 
    return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
}

export function isColliding(rect,touchPosX,touchPosY){
    return rect.x <= touchPosX && touchPosX <= rect.x + rect.width &&
           rect.y <= touchPosY && touchPosY <= rect.y + rect.height;
}

export function createRectangle(Image,marker){
    return {
        x: marker.offSetX,
        y: marker.offSetY,
        width: Image.width,
        height: Image.height,
        marker: marker
    }
}