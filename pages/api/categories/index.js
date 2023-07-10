import dbConnect from "../../../db/connect.js";
import Category from "../../../db/models/Category.js";

export default async function handler(request, response) {
  await dbConnect();
  // get all categories from the categories db
  if (request.method === "GET") {
    const categories = await Category.find({});
    if (!categories) {
      return response.status(404).json({ message: "No categories found" });
    }
    return response.status(200).json(categories);
  }
  return response.status(405).json({ message: "Method not allowed" });
}
