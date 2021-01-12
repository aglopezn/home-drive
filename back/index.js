const express = require('express');
const app = express();
const cors = require('cors');
const dirRouter = require('./src/routes/dir');

const PORT = process.env.PORT || 5000;

app.use('/api/dir', cors(), dirRouter);


app.listen(PORT, () => console.log(`app running on port: ${PORT}`));

