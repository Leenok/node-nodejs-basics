import fs from 'fs';

const read = async () => {
    fs.readFile('./files/fileToRead.txt', 'utf-8', (err, data) => {
        if (err) {
            const err = new Error('FS operation failed');
            console.log(err.message);
            return;
        };
        console.log(data);
    })
};

await read();