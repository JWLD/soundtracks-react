require('dotenv').config();

const app = require('./server.js');

app.listen(9000, () => {
  console.log('Server running at 9000');
});
