import multer, { DiskStorageOptions } from "multer";
import path from "path";

const imageStorage: any = multer.diskStorage({
  destination: function (req: any, file: any, cb: any): void {
    var folder: any = "";
    if (req.baseUrl.includes("orc")) {
      folder = "orcamento";
    } else if (req.baseUrl.includes("user")) {
      folder = "usuarios";
    }
    cb(null, `public/images/${folder}`);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 1000)) +
        path.extname(file.originalname)
    );
  },
});
const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(pdf|png|jpeg)$/)){
            return cb(new Error("por favor, envie apenas jpg ou png"))
        };
    }
})
