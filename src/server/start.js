require('dotenv').config();

const app = require('./server.js');

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
