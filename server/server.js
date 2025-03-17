const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = "mongodb+srv://parasdoye196:rJ5wfh7jvCKc3AHC@rtrips.u79ns.mongodb.net/?retryWrites=true&w=majority&appName=RTrips";

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("Travel");
    const messagesCollection = db.collection("messages");

    // Route to handle form submissions
    app.post('/api/contact', async (req, res) => {
      const { name, email, subject, message } = req.body;
      const newMessage = { name, email, subject, message, date: new Date() };

      try {
        await messagesCollection.insertOne(newMessage);
        res.status(200).send("Message stored successfully!");
      } catch (error) {
        res.status(500).send("Error storing message: " + error.message);
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);