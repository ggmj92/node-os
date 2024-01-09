const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

console.log('OS Info:', getOSInfo());
console.log('Network Info:', getNetworkInfo());