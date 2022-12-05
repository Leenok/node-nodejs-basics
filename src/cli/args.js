const parseArgs = () => {
    let r = process.argv.slice(-2).map(it => it.split("=")).map((it) => it[0].substring(2) + " is " + it[1]).join(', ');
    console.log(r);
};

parseArgs();