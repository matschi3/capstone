import dbConnect from "../../../db/connect.js";
import Part from "../../../db/models/Part.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
  }

  if (request.method === "PUT") {
  }

  if (request.method === "DELETE") {
  }
}
