import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const parts = await Part.find({}).populate("category");
    if (!parts) {
      return response.status(404).json({ message: "No parts found" });
    }
    return response.status(200).json(parts);
  }
  if (request.method === "POST") {
    try {
      const newPart = request.body;
      await Part.create(newPart);
      return response.status(201).json({ status: "Part created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
