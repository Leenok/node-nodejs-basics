import fs from 'fs';
import { readdir } from 'node:fs/promises';

const copy = async () => {
    if (fs.existsSync('./files') && (!fs.existsSync('./files-copy'))) {
        fs.mkdirSync('./files-copy');
        const files = await readdir('./files');
        for (const file of files) {
            fs.copyFile(`./files/${file}`, `./files-copy/${file}`, (err) => {
                if (err) throw err;
            });
        }
        console.log('Folder files copy.')
    } else {
        const err = new Error('FS operation failed');
        console.error(err.message);
    }
};

copy();