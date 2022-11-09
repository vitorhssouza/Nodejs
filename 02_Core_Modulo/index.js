const path = require('path');
const os = require('os');

const extension = path.extname('arquivo.html');
console.log(extension);

const totalMem = os.totalmem()
console.log(totalMem)

const type = os.type();
console.log(type);