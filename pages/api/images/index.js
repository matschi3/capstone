// needed to read the .env variables
import process from "node:process";
import cloudinary from "cloudinary";

// as the default setting of Next.js API is using the bodyParser, we need to deactivate it by setting its config
export const config = {
  api: {
    bodyParser: false,
  },
};
// set the cloudinary config to use your environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
