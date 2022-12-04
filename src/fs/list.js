import fs from 'fs';
import { readdir } from 'node:fs/promises';

const list = async () => {
    if (fs.existsSync('./files')) {
        const files = await readdir('./files');
        for (const file of files) {
            console.log(file);
        }
    } else {
        const err = new Error('FS operation failed');
        console.error(err.message);
    }
};

await list();