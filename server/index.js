const express = require('express');
const cors = require('cors');

const container = require('./containerConfig');
const config = container.resolve('config');
const PORT = config.get('DevServer.port');
const origin  = config.get('DevServer.originAllowed');

const app = express();
app.use(express.json());
app.use(cors ({
    origin: origin
}));


app.listen(PORT, ()=>{
    console.log(`server is running on PORT : ${PORT}`);
});

