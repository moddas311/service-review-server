const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;


// Middle wares 
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Service Review Assignment Running');
});

app.listen(port, () => {
    console.log(`Service review Assignment running on port ${port}`);
})