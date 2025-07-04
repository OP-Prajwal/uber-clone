const app = require('./app');
const db = require('./db');
const http = require('http');
const port = process.env.PORT || 2000;
const { initializeSocket } = require('./socket');

const server = http.createServer(app);
initializeSocket(server);

try {
    server.listen(port, () => {
        console.log("server running on port ", port);
    });
} catch (error) {
    console.log("error while running the server ", error);
}