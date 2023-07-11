import dbConnect from "../../../db/connect.js";
import Category from "../../../db/models/Category.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  // get id-specific category from the categories db
  if (request.method === "GET") {
    const category = await Category.findById(id);
    if (!category) {
      return response.status(404).json({ status: "No category found" });
    }
    response.status(200).json(category);
  }
  // update id-specific category from the categories db
  if (request.method === "PUT") {
    try {
      const editedCategory = request.body;
      await Category.findByIdAndUpdate(id, editedCategory);
      response.status(200).json({ status: "Category edited" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  // delete id-specific category from the categories db
  if (request.method === "DELETE") {
    await Category.findByIdAndDelete(id);
    response.status(200).json({ status: "Category deleted" });
  }
}
