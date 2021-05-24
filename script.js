function add(point, offsetX, offsetY) {
    return {
        x: point.x + offsetX,
        y: point.y + offsetY
    }
}

function createDiamond(center, scale, color) {
    var distortion = 1.5 
    var left = add(center, -1 * scale, 0);
    var top = add(center, 0, -1 * scale * distortion);
    var right = add(center, scale, 0);
    var bottom = add(center, 0, scale * distortion);
    return `<path  id="svg_7" d="M ${left.x} ${left.y} L ${top.x} ${top.y} L ${right.x} ${right.y} L ${bottom.x} ${bottom.y} Z" fill="#${color}${color}${color}"/>`
}

const svgContainer = document.getElementById("svg");
const controlContainer = document.getElementById("control")
const center1xSlider = document.getElementById("center1x");
const center2xSlider = document.getElementById("center2x");
const center1ySlider = document.getElementById("center1y");
const center2ySlider = document.getElementById("center2y");
center1xSlider.oninput = () => render();
center2xSlider.oninput = () => render();
center1ySlider.oninput = () => render();
center2ySlider.oninput = () => render();

function render() {
    var center1 = {
        x: Number(center1xSlider.value),
        y: Number(center1ySlider.value),
    }
    
    var center2 = {
        x: Number(center2xSlider.value),
        y: Number(center2ySlider.value),
    }
    
    var paths = "";
    var scales = [30, 25, 20, 15, 10, 5]
    var colors = ["00", "33", "66", "99", "bb", "ff"]
    for (var index = 0; index <= 5; index++ ) {
        paths += createDiamond(center1, scales[index], colors[index]);
        paths += createDiamond(center2, scales[index], colors[index]);
    }
    
   

    
    var svgText = `
    <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g id="Layer_1">
     <title>Layer 1</title>
     <g stroke="null" id="svg_9">
     ${paths}     
     </g>
    </g>
    </svg>
    `
    // <path  id="svg_7" d="M 45 50 L 55 35 L 65 50 L 55 65 Z" fill="#000000"/>    
    {/* <g stroke="null" id="svg_9">
    <path  id="svg_7" d="M 40 50 L 45 40 L 50 50 L 45 60 Z" fill="#eeeeee"/>
    <path  id="svg_7" d="M 45 50 L 55 40 L 65 50 L 55 60 Z" fill="#eeeeee"/>
    </g> */}
    
    svgContainer.innerHTML = svgText;
    
}

render();