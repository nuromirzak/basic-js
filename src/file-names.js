const {NotImplementedError} = require('../extensions/index.js');

function renameFiles(names) {
    let map = new Map();
    let ans = [];

    for (let name of names) {
        if (map.has(name)) {
            let freq = map.get(name);
            let newName;

            do {
                newName = `${name}(${freq})`;
                freq++;
            } while (map.has(newName));

            ans.push(newName);
            map.set(newName, 1);
            map.set(name, freq);
        } else {
            ans.push(name);
            map.set(name, 1);
        }
    }

    return ans;
}

module.exports = {
    renameFiles
};
