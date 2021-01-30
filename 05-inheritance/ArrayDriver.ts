import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myShape = new Shape(10, 30);
let myCircle = new Circle(5, 10, 30);
let myRectangle = new Rectangle(10,5,45,30);

//declare an Array of shapes
let theShapes: Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes){
    console.log(shape.getInfo());
    
}

