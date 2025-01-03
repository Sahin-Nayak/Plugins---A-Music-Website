import { Router } from "express";
import {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    updatePlaylist,
    deletePlaylist,
    addAudioToPlaylist,
    removeAudioFromPlaylist,
} from "../controllers/playlist.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// router.use(verifyJWT); // Apply the verifyJWT middleware to all routes

// Route to create a new playlist
router.route("/").post(createPlaylist);

// Routes for specific playlist operations by playlist ID
router
    .route("/:playlistId")
    .get(getPlaylistById) // Get playlist details by ID
    .patch(updatePlaylist) // Update playlist details
    .delete(deletePlaylist); // Delete a playlist

// Routes to add or remove an audio file to/from a playlist
router.route("/add/:audioId/:playlistId").patch(addAudioToPlaylist); // Add audio
router.route("/remove/:audioId/:playlistId").patch(removeAudioFromPlaylist); // Remove audio

// Route to get all playlists for a specific user
router.route("/user/:userId").get(getUserPlaylists);

export default router;
