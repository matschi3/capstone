import process from "node:process";

import cloudinary from "cloudinary";
import formidable from "formidable";
// formidable does not work with the default api settings of Next.js, so disable the bodyParser via config
export const config = {
  api: {
    bodyParser: false,
  },
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const form = formidable({});
  // using formidables' parse method to get a simple access to the file data
  form.parse(req, async (error, fields, files) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    const { file } = files;
    const { newFilename, filepath } = file[0];
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
      tags: ["etagere"],
    });
    return res.status(201).json(result);
  });
}
