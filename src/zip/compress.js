import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    let grip = zlib.createGzip();
    let rid = fs.createReadStream('./files/fileToCompress.txt');
    let writ = fs.createWriteStream('./files/archive.gz');
    rid.pipe(grip).pipe(writ);
};

await compress();