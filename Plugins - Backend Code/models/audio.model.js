import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const audioSchema = new Schema(
    {
        audioFile: {
            type: Object, //cloudinary url
            required: true
        },
        thumbnail: {
            type: Object, //cloudinary url
            required: true,
        },
        title: {
            type: String, 
            required: true,
        },
        description: {
            type: String, 
            required: true,
        },
        artist:{
            type:String,
            required:true,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        // uname: {
        //     type:Schema.Types.ObjectId,
        //     ref:'User',
        // },
        uname: {
            type:String,
            required:true,
        },

    }, 
    {
        timestamps: true
    }
)

audioSchema.plugin(mongooseAggregatePaginate)

export const Audio = mongoose.model("Audio", audioSchema)