const getUserInput = require('./lib/userInput'); 
const { Triangle, Circle, Square } = require('./lib/shapes'); 
const fs = require('fs');

// Get user input, then create a user selected-shape of Object
function svgGenerator() {
    getUserInput().then(userInput => {
        let shapeProperty;

        if (userInput.shape === 'circle') {
            shapeProperty = new Circle(userInput.shapeColour);
        } else if (userInput.shape === 'triangle') {
            shapeProperty = new Triangle(userInput.shapeColour);
        } else if (userInput.shape === 'square') {
            shapeProperty = new Square(userInput.shapeColour);
        } else {
            console.log('Invalid shape choice.');
            return;
        }

        // Specify shape properties, use vewBox to get screen adaption, then Generate SVG content
        const svgContent = 
        `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="whitesmoke" stroke="black" stroke-width="2"/>
                ${shapeProperty.render()}
                <text x="150" y="125" text-anchor="middle" font-size="50" font-weight="bold" font-family="monospace" fill="white">
                    ${userInput.text}
                </text>
            </svg>`;

        // Save generated SVG content to a file named 'logo.svg'
        fs.writeFileSync('./examples/logo.svg', svgContent);

        console.log('logo.svg file Generated !');

    }).catch(error => {
        console.error('Error --> ', error);
    });
}

svgGenerator();