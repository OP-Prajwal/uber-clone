const express = require('express');
const http = require('http');
const cors = require('cors');
const { initializeSocket } = require('./socket');

const app = express();
const server = http.createServer(app);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Initialize socket
initializeSocket(server);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
