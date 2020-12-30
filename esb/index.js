const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('combined'));
app.use(bodyParser.json());


app.use('', indexRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));