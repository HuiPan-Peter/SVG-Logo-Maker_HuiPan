const { Triangle, Circle, Square } = require('./shapes.js');

//Test each shape class for a render() method that returns a string for the corresponding SVG file with the given shape color.
describe('Triangle', () => { 
    it('should render a triangle with the specified color of red', () => {
        const shape = new Triangle('red');
        console.log(shape.render());
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
    });
});

describe('Circle', () => { 
    it('should render a circle with the specified color of green', () => {
        const shape = new Circle('green');
        console.log(shape.render());
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

describe('Square', () => { 
    it('should render a square with the specified color of whitesmoke', () => {
        const shape = new Square('whitesmoke');
        console.log(shape.render());
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="whitesmoke" />');
    });
});
