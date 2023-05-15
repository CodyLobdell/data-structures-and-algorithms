'use strict';

// Create a new Hashtable object
const table = new Hashtable();
// Add some key-value pairs to the table
table.set('apple', 'red');
table.set('banana', 'yellow');
table.set('cherry', 'red');
table.set('date', 'brown');
// Test the get() method
console.log(table.get('banana')); // Should output 'yellow'
console.log(table.get('date'));   // Should output 'brown'
// Test the has() method
console.log(table.has('cherry')); // Should output true
console.log(table.has('grape'));  // Should output false
// Test the keys() method
console.log(table.keys()); // Should output ['apple', 'banana', 'cherry', 'date']
// Test the hash() method
console.log(table.hash('apple')); // Should output a number between 0 and 136
