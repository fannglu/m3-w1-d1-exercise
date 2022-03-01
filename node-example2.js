const { PI } = Math;  // private to this file
// PI have curly brace means its private to this file 

exports.area = (r) => PI * r ** 2;  // exported
exports.circumference = (r) => 2 * PI * r;  // exported

// the other way 
// module.exports = area; // this is only for one 
// because there is 2 so can use exports.___ 