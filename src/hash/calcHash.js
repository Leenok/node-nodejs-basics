import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const fileBuffer = fs.readFileSync('./files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const finalHex = hash.update(fileBuffer).digest('hex');
    console.log(finalHex);
};

await calculateHash();