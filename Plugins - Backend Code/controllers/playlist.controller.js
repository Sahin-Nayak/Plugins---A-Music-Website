import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.model.js";
import { Audio } from "../models/audio.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description,owner } = req.body;

  if (!name || !description) {
    throw new ApiError(400, "Name and description are required");
  }

  const playlist = await Playlist.create({
    name,
    description,
    owner, // Assuming `req.user` is populated by middleware
  });

  return res.status(201).json(
    new ApiResponse(201, playlist, "Playlist created successfully")
  );
});

const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const playlists = await Playlist.find({ owner: userId }).populate("audios");

  return res.status(200).json(
    new ApiResponse(200, playlists, "User playlists fetched successfully")
  );
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID");
  }

  const playlist = await Playlist.findById(playlistId).populate("audios");

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  return res.status(200).json(
    new ApiResponse(200, playlist, "Playlist fetched successfully")
  );
});

const addAudioToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, audioId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid playlist or audio ID");
  }

  const playlist = await Playlist.findById(playlistId);

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  if (playlist.audios.includes(audioId)) {
    throw new ApiError(400, "Audio is already in the playlist");
  }

  playlist.audios.push(audioId);
  await playlist.save();

  return res.status(200).json(
    new ApiResponse(200, playlist, "Audio added to playlist successfully")
  );
});

const removeAudioFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, audioId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid playlist or audio ID");
  }

  const playlist = await Playlist.findById(playlistId);

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  playlist.audios = playlist.audios.filter(
    (id) => id.toString() !== audioId.toString()
  );

  await playlist.save();

  return res.status(200).json(
    new ApiResponse(200, playlist, "Audio removed from playlist successfully")
  );
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID");
  }

  const playlist = await Playlist.findByIdAndDelete(playlistId);

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  return res.status(200).json(
    new ApiResponse(200, null, "Playlist deleted successfully")
  );
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID");
  }

  const updatedFields = {};
  if (name) updatedFields.name = name;
  if (description) updatedFields.description = description;

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    updatedFields,
    { new: true }
  );

  if (!playlist) {
    throw new ApiError(404, "Playlist not found");
  }

  return res.status(200).json(
    new ApiResponse(200, playlist, "Playlist updated successfully")
  );
});

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addAudioToPlaylist,
  removeAudioFromPlaylist,
  deletePlaylist,
  updatePlaylist,
};


/*
 22/11/2024 The below code updated version of above code where we are not passing userid for
 fetching playlist instead we are passing the owner which nothing but username from user model  
*/

// import mongoose, { isValidObjectId } from "mongoose";
// import { Playlist } from "../models/playlist.model.js";
// import { User } from "../models/user.model.js"; // Import User model for querying usernames
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

// const createPlaylist = asyncHandler(async (req, res) => {
//   const { name, description, owner } = req.body;

//   console.log("Owner received:", owner); // Log the owner to debug

//   if (!name || !description || !owner) {
//     throw new ApiError(400, "Name, description, and owner are required");
//   }

//   // Verify the owner exists in the User collection
//   // const user = await User.findOne({ username: owner });
//   // console.log("User found:", user);
//   // if (!user) {
//   //   throw new ApiError(404, "Owner not found");
//   // }

//   const playlist = await Playlist.create({
//     name,
//     description,
//     owner,
//   });

//   return res.status(201).json(
//     new ApiResponse(201, playlist, "Playlist created successfully")
//   );
// });


// const getUserPlaylists = asyncHandler(async (req, res) => {
//   const { owner } = req.params;

//   // Verify the owner exists in the User collection
//   const user = await User.findOne({ username: owner });
//   if (!user) {
//     throw new ApiError(404, "Owner not found");
//   }


// // const getUserPlaylists = asyncHandler(async (req, res) => {
// //   const { owner } = req.params;

// //   // Skip the User.findOne check
// //   const playlists = await Playlist.find({ owner }).populate("audios");

// //   return res.status(200).json(
// //     new ApiResponse(200, playlists, "User playlists fetched successfully")
// //   );
// // });





//   const playlists = await Playlist.find({ owner: user._id }).populate("audios");

//   return res.status(200).json(
//     new ApiResponse(200, playlists, "User playlists fetched successfully")
//   );
// });

// const getPlaylistById = asyncHandler(async (req, res) => {
//   const { playlistId } = req.params;

//   if (!isValidObjectId(playlistId)) {
//     throw new ApiError(400, "Invalid playlist ID");
//   }

//   const playlist = await Playlist.findById(playlistId).populate("audios");

//   if (!playlist) {
//     throw new ApiError(404, "Playlist not found");
//   }

//   return res.status(200).json(
//     new ApiResponse(200, playlist, "Playlist fetched successfully")
//   );
// });

// const addAudioToPlaylist = asyncHandler(async (req, res) => {
//   const { playlistId, audioId } = req.params;

//   if (!isValidObjectId(playlistId) || !isValidObjectId(audioId)) {
//     throw new ApiError(400, "Invalid playlist or audio ID");
//   }

//   const playlist = await Playlist.findById(playlistId);

//   if (!playlist) {
//     throw new ApiError(404, "Playlist not found");
//   }

//   if (playlist.audios.includes(audioId)) {
//     throw new ApiError(400, "Audio is already in the playlist");
//   }

//   playlist.audios.push(audioId);
//   await playlist.save();

//   return res.status(200).json(
//     new ApiResponse(200, playlist, "Audio added to playlist successfully")
//   );
// });

// const removeAudioFromPlaylist = asyncHandler(async (req, res) => {
//   const { playlistId, audioId } = req.params;

//   if (!isValidObjectId(playlistId) || !isValidObjectId(audioId)) {
//     throw new ApiError(400, "Invalid playlist or audio ID");
//   }

//   const playlist = await Playlist.findById(playlistId);

//   if (!playlist) {
//     throw new ApiError(404, "Playlist not found");
//   }

//   playlist.audios = playlist.audios.filter(
//     (id) => id.toString() !== audioId.toString()
//   );

//   await playlist.save();

//   return res.status(200).json(
//     new ApiResponse(200, playlist, "Audio removed from playlist successfully")
//   );
// });

// const deletePlaylist = asyncHandler(async (req, res) => {
//   const { playlistId } = req.params;

//   if (!isValidObjectId(playlistId)) {
//     throw new ApiError(400, "Invalid playlist ID");
//   }

//   const playlist = await Playlist.findByIdAndDelete(playlistId);

//   if (!playlist) {
//     throw new ApiError(404, "Playlist not found");
//   }

//   return res.status(200).json(
//     new ApiResponse(200, null, "Playlist deleted successfully")
//   );
// });

// const updatePlaylist = asyncHandler(async (req, res) => {
//   const { playlistId } = req.params;
//   const { name, description } = req.body;

//   if (!isValidObjectId(playlistId)) {
//     throw new ApiError(400, "Invalid playlist ID");
//   }

//   const updatedFields = {};
//   if (name) updatedFields.name = name;
//   if (description) updatedFields.description = description;

//   const playlist = await Playlist.findByIdAndUpdate(
//     playlistId,
//     updatedFields,
//     { new: true }
//   );

//   if (!playlist) {
//     throw new ApiError(404, "Playlist not found");
//   }

//   return res.status(200).json(
//     new ApiResponse(200, playlist, "Playlist updated successfully")
//   );
// });

// export {
//   createPlaylist,
//   getUserPlaylists,
//   getPlaylistById,
//   addAudioToPlaylist,
//   removeAudioFromPlaylist,
//   deletePlaylist,
//   updatePlaylist,
// };

