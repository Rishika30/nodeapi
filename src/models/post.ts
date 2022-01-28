import  mongoose from "mongoose";
import { Document, Schema, model } from "mongoose";

export interface iUser extends Document{
    title: string;
    body: string;
}

const postSchema = new mongoose.Schema<iUser>({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
});

//export const userModel = model<iUser>("Post", postSchema);

const postModel = mongoose.model<iUser & mongoose.Document>('Post', postSchema);
export default postModel;