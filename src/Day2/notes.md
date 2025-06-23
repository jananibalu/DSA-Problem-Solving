  1. var 
    - Can be reassigned and redeclared
    - Supports hoisting, but its initial value is undefined
    - It's the old way of declaring variables (not recommended now)

  2. let 
    -Has block scope
    -Can be updated (reassigned) but cannot be redeclared in the same scope
    -Also supports hoisting, but is not initialized (will throw ReferenceError if accessed before declaration)

 3. const 
    -Stands for constant
    -Has block scope
    -Cannot be reassigned (the reference stays constant)
    -Must be initialized at the time of declaration
    -Also hoisted, but not initialized

-let and const were introduced in ES6
-Prefer const by default — use let only when value needs to change
-Avoid var in modern JavaScript