function add(point, offsetX, offsetY) {
    return {
        x: point.x + offsetX,
        y: point.y + offsetY
    }
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
    
    var left1 = add(center1, -10, 0);
    var top1 = add(center1, 0, -15);
    var right1 = add(center1, 10, 0);
    var bottom1 = add(center1, 0, 15);
    
    var left2 = add(center2, -10, 0);
    var top2 = add(center2, 0, -15);
    var right2 = add(center2, 10, 0);
    var bottom2 = add(center2, 0, 15);
    
    var svgText = `
    <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g id="Layer_1">
     <title>Layer 1</title>
     <g stroke="null" id="svg_9">
     <path  id="svg_7" d="M ${left1.x} ${left1.y} L ${top1.x} ${top1.y} L ${right1.x} ${right1.y} L ${bottom1.x} ${bottom1.y} Z" fill="#000000"/>
     <path  id="svg_7" d="M ${left2.x} ${left2.y} L ${top2.x} ${top2.y} L ${right2.x} ${right2.y} L ${bottom2.x} ${bottom2.y} Z" fill="#000000"/>     
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