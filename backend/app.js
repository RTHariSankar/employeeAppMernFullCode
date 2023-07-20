const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());

require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
require('./database/mongodb');

const resLogRouter = require('./routes/register');
const empLogRouter = require('./routes/employee');

app.use('/',resLogRouter);
app.use('/',empLogRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
