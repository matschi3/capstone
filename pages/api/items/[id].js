import dbConnect from "../../../db/connect.js";
import Item from "../../../db/models/Item.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  try {
    // get id-specific item from the items db
    if (request.method === "GET") {
      const item = await Item.findById(id).populate("parts");
      if (!item) {
        return response.status(404).json({ status: "No item found" });
      }
      response.status(200).json(item);
    } else if (request.method === "PUT") {
      // update id-specific item from the items db
      try {
        const editedItem = request.body;
        await Item.findByIdAndUpdate(id, editedItem);
        response.status(200).json({ status: "Item edited" });
      } catch (error) {
        response.status(400).json({ error: error.message });
      }
    } else if (request.method === "DELETE") {
      // delete id-specific item from the items db
      await Item.findByIdAndDelete(id);
      response.status(200).json({ status: "Item deleted" });
    } else {
      return response.status(405).json({ status: "Method not allowed" });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
