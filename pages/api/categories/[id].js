import dbConnect from "../../../db/connect.js";
import Category from "../../../db/models/Category.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  try {
    // get id-specific category from the categories db
    if (request.method === "GET") {
      const category = await Category.findById(id);
      if (!category) {
        return response.status(404).json({ status: "No category found" });
      }
      response.status(200).json(category);
    } else if (request.method === "PUT") {
      // update id-specific category from the categories db
      try {
        const editedCategory = request.body;
        await Category.findByIdAndUpdate(id, editedCategory);
        response.status(200).json({ status: "Category edited" });
      } catch (error) {
        response.status(400).json({ error: error.message });
      }
    } else if (request.method === "DELETE") {
      // delete id-specific category from the categories db
      try {
        await Category.findByIdAndDelete(id);
        response.status(200).json({ status: "Category deleted" });
      } catch (error) {
        response.status(500).json({ error: "An error occurred" });
      }
    } else {
      return response.status(405).json({ status: "Method not allowed" });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
