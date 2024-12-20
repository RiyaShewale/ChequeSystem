import mongoose from "mongoose";

const customerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']// i have addedd this
    },
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique:true
    },
    accountNumber: {
        type: String,
        required: true,
        unique:true
    },
    ifscCode: {
        type: String,
        required: true
    },
    chequeIdArray: [ //I have changed the type frm string to this
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Cheques"
        }
    ]
})

export const Customer=mongoose.model('Customer',customerSchema)