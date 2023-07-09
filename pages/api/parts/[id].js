import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // get id-specific part from the parts db
  if (request.method === "GET") {
    const part = await Part.findById(id).populate("category");
    if (!part) {
      return response.status(404).json({ status: "Teil nicht gefunden." });
    }
    response.status(200).json(part);
  }
  // update id-specific part from the parts db
  if (request.method === "PUT") {
    const editedPart = request.body;
    await Part.findByIdAndUpdate(id, editedPart);
    response.status(200).json({ status: "Teil bearbeitet." });
  }
  // delete id-specific part from the parts db
  if (request.method === "DELETE") {
    await Part.findByIdAndDelete(id);
    response.status(200).json({ status: "Teil gelöscht." });
  } else {
    return response.status(405).json({ status: "Methode nicht erlaubt." });
  }
}
