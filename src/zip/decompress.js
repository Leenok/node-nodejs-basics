import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    let unzip = zlib.createGunzip();
    let ri = fs.createReadStream('./files/archive.gz');
    let wr = fs.createWriteStream('./files/fileToCompress.txt');
    ri.pipe(unzip).pipe(wr);
};

await decompress();