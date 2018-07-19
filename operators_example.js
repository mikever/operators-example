let a = false;
let b = false;

// Where does the error occur?
// What happens before the error?
// How can parens fix this?
let c = b != a = !b;

// Operator     Order of Precedence in JS
// ()           20
// !            16
// !=           10
// =            3

//   3   10  3  16
// c = b != a = !b;

// First: Logical NOT
// c = b != a = (!b)
// c = b != a = true

// Second: Inequality
// c = (b != a) = true
// c = false = true

// Third: Assignment
// c = false = true     ERROR
// These are now booleans, not variables; you cannot assign boolean 'true' into boolean 'false'

// A correction with parenthesis
let c = b != (a = !b);

// First: Grouping
// c = b != (a = !b)
// a is a variable. It gets assigned not-false (true), so the false value is replaced with true
// c = b != true

// Second: Logical NOT
// c = (b != true)
// The statement "b's value of false does not equal true" is true
// c = true

// Comment out incorrect variable assignment above and run to check
console.log(c);