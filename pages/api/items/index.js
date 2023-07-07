import dbConnect from "../../../db/connect.js";
import Item from "../../../db/models/Item.js";

export default async function handler(request, response) {
  await dbConnect();
  // get all items from the items db + populate parts
  if (request.method === "GET") {
    const items = await Item.find({}).populate("parts");
    return response.status(200).json(items);
  }
}
