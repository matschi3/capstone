import dbConnect from "../../../db/connect.js";
import Item from "../../../db/models/Item.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const items = await Item.find({}).populate({
      path: "parts",
      populate: { path: "category" },
    });
    if (!items) {
      return response.status(404).json({ message: "No items found" });
    }
    return response.status(200).json(items);
  }
  if (request.method === "POST") {
    try {
      const newItem = request.body;
      await Item.create(newItem);
      return response.status(201).json({ status: "Item created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
