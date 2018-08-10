//LIBRARIES-----------
const yargs = require("yargs");

//FILE MODULE---------
const geocode = require("./geocode/geocode");

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: "address",
            describe: "address for fetch weather",
            string: true
        }
    }).help()
    .alias("help", "h")
    .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});