
function logIterable(it) {
    if (typeof it[Symbol.iterator] !== "function") {
      console.log(it, "is not iterable.");
      return;
    }
    for (const letter of it) {
      console.log(letter);
    }
  }
  
  // Array
  logIterable(["a", "b", "c"]);
  // a
  // b
  // c
  
  // String
  logIterable("abc");
  // a
  // b
  // c
  
  // Number
  logIterable(123);
  // 123 is not iterable.
  