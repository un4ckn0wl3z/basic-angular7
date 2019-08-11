const express = require('express');
const server = express();

const cors = require('cors');

server.use(cors());
server.get('/', (req, res) => {
    const items = [
        { userId: 101, id: 1001, title: 'Connect basic Angular 7 from nodejs 01' },
        { userId: 102, id: 1002, title: 'Connect basic Angular 7 from nodejs 02' },
        { userId: 103, id: 1003, title: 'Connect basic Angular 7 from nodejs 03' },
        { userId: 104, id: 1004, title: 'Connect basic Angular 7 from nodejs 04' },
        { userId: 105, id: 1005, title: 'Connect basic Angular 7 from nodejs 05' }
    ];
    res.json(items);
});

server.listen(3000, () => {
    console.log('Server runing...');
});