import mongoose, { isValidObjectId } from "mongoose";
import { Audio } from "../models/audio.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

//get all audios

const getAllAudios = asyncHandler(async (req, res) => {
  const { page = 1, limit = 80, query, sortBy = "createdAt", sortType = -1, userId } = req.query;

// Search by title

  const filters = {};
  if (query) filters.title = { $regex: query, $options: "i" }; 
  if (userId && isValidObjectId(userId)) filters.owner = userId;

  const audios = await Audio.aggregatePaginate(
    Audio.aggregate([{ $match: filters }]),
    {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { [sortBy]: parseInt(sortType) },
    }
  );

  return res.status(200).json(
    new ApiResponse(200, audios, "Audios fetched successfully")
  );
});




// const publishAnAudio = asyncHandler(async (req, res) => {
//   const { title, description } = req.body;

//   if (!title || !description) {
//     throw new ApiError(400, "Title and description are required");
//   }

//   // Upload audio file and thumbnail to Cloudinary
//   const audioFile = await uploadOnCloudinary(req.files.audioFile, "audio");
//   const thumbnail = await uploadOnCloudinary(req.files.thumbnail, "image");

//   // Create the audio document
//   const audio = await Audio.create({
//     audioFile,
//     thumbnail,
//     title,
//     description,
//     artist,
//     owner: req.user.id, // Assuming the logged-in user is sending the request
//   });

//   return res.status(201).json(
//     new ApiResponse(201, audio, "Audio published successfully")
//   );
// });

// 15.11.24 --> add by sahin      


const publishAnAudio = asyncHandler(async (req, res) => {
  const { title, description, artist, uname } = req.body;

  if (!title ) {
    throw new ApiError(400, "Title and description are required");
  }
  if (!description) {
    throw new ApiError(400, "Description is required");
  }
  if (!artist) {
    throw new ApiError(400, "Artists are required");
  }
  if (!uname) {
    throw new ApiError(400, "Username is required");
  }

  // Ensure that req.files is defined and contains the required fields
  if (!req.files || !req.files.audioFile || !req.files.thumbnail) {
    throw new ApiError(400, "Both audio file and thumbnail are required");
  }

  // Upload audio file and thumbnail to Cloudinary
  const audioFile = await uploadOnCloudinary(req.files.audioFile[0].path, "audio");
  const thumbnail = await uploadOnCloudinary(req.files.thumbnail[0].path, "image");
  // const uname = req.user.object;

  // Create the audio document
  const audio = await Audio.create({
    audioFile: audioFile.secure_url,
    thumbnail: thumbnail.secure_url,
    title,
    description,
    artist, // Make sure 'artist' is available in req.body
    uname, // Assuming the logged-in user is sending the request
  });

  return res.status(201).json(
    new ApiResponse(201, audio, "Audio published successfully")
  );
});


// 16.11.24


// const publishAnAudio = asyncHandler(async (req, res) => {
//   const { title, description, artist, uname } = req.body; // Extract uname from req.body

//   if (!title) {
//     throw new ApiError(400, "Title is required");
//   }
//   if (!description) {
//     throw new ApiError(400, "Description is required");
//   }
//   if (!artist) {
//     throw new ApiError(400, "Artist is required");
//   }
//   if (!uname) {
//     throw new ApiError(400, "Username (uname) is required"); // Add validation for uname
//   }

//   // Ensure that req.files is defined and contains the required fields
//   if (!req.files || !req.files.audioFile || !req.files.thumbnail) {
//     throw new ApiError(400, "Both audio file and thumbnail are required");
//   }

//   // Upload audio file and thumbnail to Cloudinary
//   const audioFile = await uploadOnCloudinary(req.files.audioFile[0].path, "audio");
//   const thumbnail = await uploadOnCloudinary(req.files.thumbnail[0].path, "image");

//   // Create the audio document
//   const audio = await Audio.create({
//     audioFile,
//     thumbnail,
//     title,
//     description,
//     artist,
//     uname, // Save uname to the audio document
//   });

//   return res.status(201).json(
//     new ApiResponse(201, audio, "Audio published successfully")
//   );
// });



const getAudioById = asyncHandler(async (req, res) => {
  const { audioId } = req.params;

  if (!isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid audio ID");
  }

  const audio = await Audio.findById(audioId).populate("User");
  if (!audio) {
    throw new ApiError(404, "Audio not found");
  }

  return res.status(200).json(
    new ApiResponse(200, audio, "Audio fetched successfully")
  );
});

const updateAudio = asyncHandler(async (req, res) => {
  const { audioId } = req.params;

  if (!isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid audio ID");
  }

  const updateFields = {};
  const { title, description } = req.body;
  if (title) updateFields.title = title;
  if (description) updateFields.description = description;

  // Optional: Update thumbnail if provided
  if (req.files?.thumbnail) {
    updateFields.thumbnail = await uploadOnCloudinary(
      req.files.thumbnail,
      "image"
    );
  }

  const audio = await Audio.findByIdAndUpdate(audioId, updateFields, {
    new: true,
  });
  if (!audio) {
    throw new ApiError(404, "Audio not found");
  }

  return res.status(200).json(
    new ApiResponse(200, audio, "Audio updated successfully")
  );
});

const deleteAudio = asyncHandler(async (req, res) => {
  const { audioId } = req.params;

  if (!isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid audio ID");
  }

  const audio = await Audio.findByIdAndDelete(audioId);
  if (!audio) {
    throw new ApiError(404, "Audio not found");
  }

  return res.status(200).json(
    new ApiResponse(200, null, "Audio deleted successfully")
  );
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { audioId } = req.params;

  if (!isValidObjectId(audioId)) {
    throw new ApiError(400, "Invalid audio ID");
  }

  const audio = await Audio.findById(audioId);
  if (!audio) {
    throw new ApiError(404, "Audio not found");
  }

  audio.isPublished = !audio.isPublished;
  await audio.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      { id: audioId, isPublished: audio.isPublished },
      "Audio publish status toggled successfully"
    )
  );
});

export {
  getAllAudios,
  publishAnAudio,
  getAudioById,
  updateAudio,
  deleteAudio,
  togglePublishStatus,
};
