import dbConnect from "../../../db/connect.js";
import Item from "../../../db/models/Item.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // get id-specific item from the items db
  if (request.method === "GET") {
    const item = await Item.findById(id).populate("parts");
    if (!item) {
      return response.status(404).json({ status: "Item nicht gefunden." });
    }
    response.status(200).json(item);
  }
  // update id-specific item from the items db
  if (request.method === "PUT") {
    const editedItem = request.body;
    await Item.findByIdAndUpdate(id, editedItem);
    response.status(200).json({ status: "Item bearbeitet." });
  }
}
