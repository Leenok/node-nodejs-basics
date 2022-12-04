import fs from 'fs';
const rename = async () => {
    if (!fs.existsSync('./files/properFilename.md') && fs.existsSync('./files/wrongFilename.txt')) {
        fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
            if (err) throw err;
            console.log('file rename!');
        });
    } else {
        const err = new Error('FS operation failed');
        console.log(err.message);
    }
};

await rename();