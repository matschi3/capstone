import dbConnect from "../../../db/connect.js";
import Item from "../../../db/models/Item.js";

export default async function handler(request, response) {
  await dbConnect();
  // get all items from the items db + populate parts
  if (request.method === "GET") {
    const items = await Item.find({}).populate({
      path: "parts",
      populate: { path: "category" },
    });
    return response.status(200).json(items);
  }
  // create a new item in items db
  if (request.method === "POST") {
    try {
      const newItem = request.body;
      await Item.create(newItem);
      return response.status(201).json({ status: "Item created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
