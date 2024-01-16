const http = require('node:http');
const fs = require('node:fs/promises');
const {createReadStream} = require('node:fs');

function errorHandler(e) {
    console.error(e);
}

function logError() {
    console.error(...arguments);
}

http.createServer((req, res) => {
    fs.readFile("./no-file.txt").catch((e) => {
        console.error(e);
    });

    fs.readFile("./no-file.txt").catch((e) => {
        logError(e);
    });

    fs.readFile("./no-file.txt").catch(({message}) => {
        console.error(message);
    });

    fs.readFile("./no-file.txt").catch((e) => console.error(e));

    fs.readFile("./no-file.txt").catch(function (e) {
        console.error(e.toString());
    });

    fs.readFile("./no-file.txt").catch(function (e) {
        return console.error(e.toString());
    });

    fs.readFile("./no-file.txt").catch(errorHandler);

    createReadStream("./no-file.txt").on('error', function (error) {
        console.log(error.message);
    });

    createReadStream("./no-file.txt").on('error', error => console.log(error.message));

    (async () => {
        try {
            await fs.readFile("./no-file.txt");
        } catch (e) {
            console.error(e);
        }

        try {
            await fs.readFile("./no-file.txt");
        } catch (e) {
            return console.error(e);
        }
    })();

    res.writeHead(200);
    res.end("👋");
}).listen(8080);
