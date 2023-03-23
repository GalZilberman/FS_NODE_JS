const fs = require('node:fs');
const path = require('node:path');


const create = (num, txt) => {
    fs.writeFile((path.join(__dirname, "Files", 'file[' + num + '].txt')), txt, (err) => {
        if (err) throw err;
    });
};


const read = (num2Delete) => {
    fs.readFile(path.join(__dirname, "Files", 'file[' + num2Delete + '].txt'), (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });
};


const getRandNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
};


const concatFiles = () => {
    fs.unlink(path.join(__dirname, "Files", 'concatTextFile.txt'), (err) => {
        if (err) throw err;
    });

    let rnd = getRandNumber();
    let contantOfTheTxts = "";
    for (let i = 0; i < rnd; i++) {
        contantOfTheTxts += read(i);
    }

    fs.writeFile((path.join(__dirname, "Files", 'stringtxt.txt')), contantOfTheTxts, (err) => {
        if (err) throw err;
    });

    fs.rename('stringtxt.txt', 'concatTextFile.txt', (err) => {
        if (err) throw err;
    });


};


module.exports = { create, read, getRandNumber, concatFiles };

