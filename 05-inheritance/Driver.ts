import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";


let myShape = new Shape(10, 30);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 30);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10,5,45,30);
console.log(myRectangle.getInfo());


