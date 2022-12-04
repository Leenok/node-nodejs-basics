import fs from 'fs';
const remove = async () => {
    if (fs.existsSync('./files/fileToRemove.txt')) {
        fs.unlink('./files/fileToRemove.txt', err => {
            if (err) throw err;
            console.log('File delete.');
        })
    } else {
        const err = new Error('FS operation failed');
        console.log(err.message);
    }
};

await remove();