const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;



// Middle wares 
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_REVIEW}:${process.env.DB_PASSWORD}@cluster0.w89pmsb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const serviceCOllection = client.db('photography').collection('services');
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCOllection.find(query);
            const services = await cursor.limit(3).toArray();
            res.send(services);
        });
        app.get('/allservice', async (req, res) => {
            const query = {};
            const cursor = serviceCOllection.find(query);
            const allServices = await cursor.toArray();
            res.send(allServices);
        });
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCOllection.findOne(query);
            res.send(service);
        })
    }
    finally {

    }
}
run().catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Service Review Assignment Server Is Running');
});

app.listen(port, () => {
    console.log(`Service review Assignment running on port ${port}`);
})