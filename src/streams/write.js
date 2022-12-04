import fs from 'fs';

const write = async () => {
    let writer = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdin.on('data', data => {
        const str = data.toString();
        writer.write(str);
    })
};

await write();