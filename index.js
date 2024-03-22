const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetHistories: histories are all entries in history table
apiRouter.get('/histories', (_req, res) => {
  res.send(histories);
});

// SubmitDate: date = date user has jsut committed to
apiRouter.post('/date', (req, res) => {
  histories = updateTable(req.body, histories);
  res.send(histories);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateTable includes a newly committed date in the table
// The 20 most recent dates are saved in memory and disappear whenever the service is restarted.
let histories = [];
function updateTable(newDate, histories) {
  histories.unshift(newDate);
  
  if (histories.length > 20) {
    histories.length = 20;
  }
  
  return histories;
}
