const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

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
  if (histories.length > 20) {
    histories.unshift(newDate);
    histories.length = 20;
  }

  return histories;
}
