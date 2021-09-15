const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({ path: '../.env' });

mongoose.plugin((schema) => {
  schema.options.toJSON = {
    transform: (doc, result) => {
      const { __v, _id, ...response } = result;
      response.id = result._id;
      return response;
    },
  };
});

const postsRoute = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('we are home');
});

// mongoose
//   .connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('connected!');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.listen(3000);
