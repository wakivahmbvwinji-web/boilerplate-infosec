const express = require('express');
const app = express();

const helmet = require('helmet'); // Already required

// Hide "X-Powered-By: Express" header
app.use(helmet.hidePoweredBy());

// FCC testing routes go below
