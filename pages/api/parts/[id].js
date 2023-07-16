import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  try {
    if (request.method === "GET") {
      const part = await Part.findById(id).populate("category");
      if (!part) {
        return response.status(404).json({ status: "No part found" });
      }
      response.status(200).json(part);
    } else if (request.method === "PUT") {
      try {
        const editedPart = request.body;
        await Part.findByIdAndUpdate(id, editedPart);
        response.status(200).json({ status: "Part edited" });
      } catch (error) {
        response.status(400).json({ error: error.message });
      }
    } else if (request.method === "DELETE") {
      await Part.findByIdAndDelete(id);
      response.status(200).json({ status: "Part deleted" });
    } else {
      response.status(405).json({ status: "Method not allowed" });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
