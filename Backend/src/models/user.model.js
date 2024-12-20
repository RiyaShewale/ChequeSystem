import mongoose from "mongoose";

const userDetailsSchema = new Schema({
    _id: {              // represents account number of a user
        type: String,
        required: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    accountHolderPhoneNo: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    accountHolderSignature: {
       type:imageSchema,
    },
    ifscCode: {
        type: String,
        required: true
    },
    chequeCodeArray: [String]
})

export const UserDetails=mongoose.model('UserDetails',userDetailsSchema)