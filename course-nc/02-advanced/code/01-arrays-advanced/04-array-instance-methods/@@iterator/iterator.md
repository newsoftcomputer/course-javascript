
# Array.prototype[@@iterator]()

    - The [@@iterator]() method of Array instances implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.

    The initial value of this property is the same function object as the initial value of the Array.prototype.values property.