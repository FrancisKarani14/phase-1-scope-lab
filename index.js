// Write your solution in this file!

var customerName = 'bob';


function upperCaseCustomerName() {
  // Modifies the global 'customerName' variable in place
  customerName = customerName.toUpperCase();
  return customerName; // Return the modified value (for consistency, though test might check global)
}


function setBestCustomer() {
  // Intentionally declares a global variable (without 'var', 'let', or 'const')
  bestCustomer = 'not bob';
  return bestCustomer;
}


function overwriteBestCustomer() {
  // Overwrites the existing global 'bestCustomer' variable
  bestCustomer = 'maybe bob';
  return bestCustomer;
}


const leastFavoriteCustomer = 'Karen';


function changeLeastFavoriteCustomer() {
  // This line is expected to cause a TypeError because 'leastFavoriteCustomer' is a const.
  // The test expects this error to be thrown.
  leastFavoriteCustomer = 'Chad';
  // No 'return' statement is necessary here because the line above will throw an error,
  // preventing execution from reaching any further code.
}


// --- EXPORT ALL FUNCTIONS AND VARIABLES ---
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};