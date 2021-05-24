// Const
const maxColor = 255;
const length = 100;
const distortion = 1.5 

function add(point, offsetX, offsetY) {
    return {
        x: point.x + offsetX,
        y: point.y + offsetY
    }
}

function createDiamond(center, scale, color) {
    
    var left = add(center, -1 * scale, 0);
    var top = add(center, 0, -1 * scale * distortion);
    var right = add(center, scale, 0);
    var bottom = add(center, 0, scale * distortion);
    return `<path  id="svg_7" d="M ${left.x} ${left.y} L ${top.x} ${top.y} L ${right.x} ${right.y} L ${bottom.x} ${bottom.y} Z" fill="#${color}${color}${color}"/>`
}

// Inputs
const svgContainer = document.getElementById("svg");
const centerGabSlider = document.getElementById("centerGab");
const numberOfDiamondsSlider = document.getElementById("numberOfDiamonds");
centerGabSlider.oninput = () => render();
numberOfDiamondsSlider.oninput = () => render();

function render() {
    var center1 = {
        x: length / 2 - Number(centerGabSlider.value),
        y: length / 2,
    }
    
    var center2 = {
        x: length / 2 + Number(centerGabSlider.value),
        y: length / 2,
    }
    
    var paths = "";
    var repetitions = Number(numberOfDiamondsSlider.value);
    
    for (var index = 0; index < repetitions; index++ ) {
        var scale = length / 2 / distortion * (repetitions - index) / repetitions; 
        var color = Math.floor(maxColor * index / repetitions).toString(16).padStart(2, "0");
        paths += createDiamond(center1, scale, color) + "\n";
        paths += createDiamond(center2, scale, color) + "\n";
    }
    
    var svgText = `
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g >
        <title>Two Diamonds</title>
        <g stroke="null">
          ${paths}     
        </g>
      </g>
    </svg>
    `    
    svgContainer.innerHTML = svgText;
}

render();