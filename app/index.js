const calc = require('./calc');
const _ = require('lodash');
const fs = require('fs');

const numbersToAdd = [3, 4, 10, 2];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);

let obj = _.assign({'a': 1}, {'b': 2}, {'c': 3});
console.log(`a: ${obj.a}, b: ${obj.b}`);

// let content;
// try {
//     content = fs.readFileSync('file.md', 'utf-8');
// } catch (ex) {
//     console.log(ex);
// }
// console.log(content);

console.log('Start reading a file...');

fs.readFile('file.md', 'utf-8', (err, content) => {
    if (err) {
        console.log('Error happened during reading the file');
        return console.log(err);
    }
    console.log(content);
});

console.log('End of the file');