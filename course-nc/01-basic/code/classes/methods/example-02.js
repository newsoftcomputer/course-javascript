
// A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:

class Point {
    x = 10;
    y = 10;
   
    scale(n) {
      this.x *= n;
      this.y *= n;
    }
  }