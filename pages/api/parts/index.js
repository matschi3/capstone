import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();
  // get all parts from the parts db
  if (request.method === "GET") {
    const parts = await Part.find({});
    return response.status(200).json(parts);
  }
  // create a new part in parts db
  if (request.method === "POST") {
    try {
      const newPart = request.body;
      await Part.create(newPart);
      return response.status(201).json({ status: "Part created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
