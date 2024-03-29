
/*
Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:
*/

class Point {
    x;
    y;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
}

class Point {
    // Overloads
    constructor(x, y);
    constructor(s);
    constructor(xs, y) {
      // TBD
    }
}

/*
There are just a few differences between class constructor signatures and function signatures:

Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
Constructors can’t have return type annotations - the class instance type is always what’s returned
*/