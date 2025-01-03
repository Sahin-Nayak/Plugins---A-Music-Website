// import { Router } from "express";
// import {
//   deleteAudio,
//   getAllAudios,
//   getAudioById,
//   publishAnAudio,
//   togglePublishStatus,
//   updateAudio,
// } from "../controllers/audio.controller.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { upload } from "../middlewares/multer.middleware.js";

// const router = Router();
// // router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

// router
//   .route("/")
//   .get(getAllAudios)
//   .post(
//     upload.fields([
//       {
//         name: "audioFile",
//         maxCount: 1,
//       },
//       {
//         name: "thumbnail",
//         maxCount: 1,
//       },
//     ]),
//     publishAnAudio
//   );

// router
//   .route("/:audioId")
//   .get(getAudioById)
//   .delete(deleteAudio)
//   .patch(upload.single("thumbnail"), updateAudio);

// router.route("/toggle/publish/:audioId").patch(togglePublishStatus);

// export default router;






import { Router } from "express";
import {
  deleteAudio,
  getAllAudios,
  getAudioById,
  publishAnAudio,
  togglePublishStatus,
  updateAudio,
} from "../controllers/audio.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
// router.use(verifyJWT); // Uncomment to apply verifyJWT middleware to all routes in this file

router
  .route("/")
  .get(getAllAudios)
  .post(
    upload.fields([
      { 
        name: "audioFile",
         maxCount: 1 
        },
      { 
        name: "thumbnail",
         maxCount: 1 
        },
    ]),
    (req, res, next) => {
      // Check if files were uploaded correctly
      if (!req.files || !req.files.audioFile || !req.files.thumbnail) {
        return res.status(400).json({ message: "Files are required" });
      }
      // Pass control to the controller function
      next();
    },
    publishAnAudio
  );

// router
//   .route("/:audioId")
//   .get(getAudioById)
//   .delete(deleteAudio)
//   .patch(upload.single("thumbnail"), updateAudio);

// router.route("/toggle/publish/:audioId").patch(togglePublishStatus);

export default router;
