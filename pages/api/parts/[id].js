import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // get id-specific part from the parts db
  if (request.method === "GET") {
    const part = await Part.findById(id).populate("category");
    if (!part) {
      return response.status(404).json({ status: "No part found" });
    }
    response.status(200).json(part);
  }
  // update id-specific part from the parts db
  if (request.method === "PUT") {
    try {
      const editedPart = request.body;
      await Part.findByIdAndUpdate(id, editedPart);
      response.status(200).json({ status: "Part edited" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  // delete id-specific part from the parts db
  if (request.method === "DELETE") {
    await Part.findByIdAndDelete(id);
    response.status(200).json({ status: "Part deleted" });
  }
  return response.status(405).json({ status: "Method not allowed" });
}
