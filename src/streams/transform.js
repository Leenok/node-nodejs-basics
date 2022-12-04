
const transform = async () => {
    process.stdin.on('data', data => {
        const stchunk = data.toString().split("").reverse().join("");
        process.stdout.write(stchunk);
    })
};

await transform();