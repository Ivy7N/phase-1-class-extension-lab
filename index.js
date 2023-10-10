// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  class Square extends Polygon {
    get isValid(){
        if(this.countSides === 4){
            return this.sides.every((side) => side === this.sides[0]);
        }
        return false;
    }
    get area(){
        if(this.isValid){
            const side = this.sides[0];
            return side * side;
        }
        return null;
    }
  }
  const square = new Square([5, 5, 5, 5]);
  console.log(square.countSides);
  console.log(square.perimeter);
  console.log(square.isValid);
  console.log(square.area);

  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([5, 5, 5]);
  console.log(triangle.countSides); // Outputs: 3
  console.log(triangle.perimeter);  // Outputs: 15
  console.log(triangle.isValid);   // Outputs: true
  