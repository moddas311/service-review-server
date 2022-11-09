const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// username = reviewDb
// pass = 8BUqSSRNxpHgRPNk


// Middle wares 
app.use(cors());
app.use(express.json())

console.log(process.env.DB_REVIEW);

const uri = "mongodb+srv://<username>:<password>@cluster0.w89pmsb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



app.get('/', (req, res) => {
    res.send('Service Review Assignment Server Is Running');
});

app.listen(port, () => {
    console.log(`Service review Assignment running on port ${port}`);
})