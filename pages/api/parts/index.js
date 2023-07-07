import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const parts = await Part.find({});
    return response.status(200).json(parts);
  }
  response.status(400).json({ error: error.message });
}
