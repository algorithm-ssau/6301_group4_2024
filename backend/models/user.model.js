import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    }
},
    // fields craetedAt, updatedAt mongoose will create, because we have "timestamps: true" => something like "Member since <createdAt>" will be in frontend
    {
        timestamps: true
    });

const User = mongoose.model("User", userSchema);

export default User;