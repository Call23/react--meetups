import { MongoClient } from "mongodb";

// api/new-meetups

async function handler(req, res) {
  if (requestAnimationFrame.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://silas:Slim@20222@cluster0.eqvcw.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });

    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
