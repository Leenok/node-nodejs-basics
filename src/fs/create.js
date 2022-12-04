import fs from 'fs';
const create = async () => {
    if (!fs.existsSync('./files/fresh.txt')) {
        fs.appendFile('./files/fresh.txt', 'I am fresh and young', function (err) {
            if (err) {
                const err = new Error('FS operation failed');
                console.error(err.message);
            };
            console.log('File create.');
        })
    } else {
        const err = new Error('FS operation failed');
        console.error(err.message);
    }

};

await create();