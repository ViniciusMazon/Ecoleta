import multer from "multer";
import path from "path";
import crypto from "crypto";

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
};

export = {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: storageTypes.local,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
