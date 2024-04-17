import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
// fields craetedAt, updatedAt mongoose will create, because we have "timestamps: true" => something like "message.createdAt : 14:01" will be in frontend
{
    timestamps: true
});

const Message = mongoose.model("Message", messageSchema);

export default Message;