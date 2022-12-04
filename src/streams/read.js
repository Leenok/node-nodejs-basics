import fs from 'fs';

const read = async () => {
    const stream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
    stream.on('data', function (chunk) {
        process.stdout.write(chunk);
    })
};

await read();