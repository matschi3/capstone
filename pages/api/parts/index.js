import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const parts = await Part.find({});
    return response.status(200).json(parts);
  }

  if (request.method === "POST") {
    const newPart = request.body;
    await Part.create(newPart);
    return response.status(201).json({ status: "Part created." });
  }
  response.status(400).json({ error: error.message });
}
