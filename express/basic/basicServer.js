/**
 * Basic server with Express
 * HTTP compression enabled, express identification disable, home, about and 404 page routes
 * Dependencies required:
 *  - npm init
 *  - npm i express
 *  - npm i compression
 */

// import Express
import express from 'express';
import compression from 'compression';

// configuration
const cfg = {
    port: process.env.PORT || 3000
}

// app creation
const app = express();

// disable express identification
app.disable('x-powered-by');

// use compression
app.use(compression());

// home page route
app.get('/', (req, res) => {
    res.send('Home page');
})

// about page route
app.get('/about', (req, res) => {
    res.send('About page');
})

// 404 page route
app.use((req, res) => {
    res.status(404).send('Not found');
})

// start server
app.listen(cfg.port, () => {
    console.log(`Listening in : ${cfg.port}`)
})

