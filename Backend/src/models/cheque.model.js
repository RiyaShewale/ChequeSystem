import mongoose from "mongoose";

const chequeSchema = new Schema({
    date: {
        type: String, // DD/MM/YYYY format
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    senderAccountNumber:{
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    recipientName: {
        type: String,
        required: false
    },
    chequeCode: {
        type: String,
        required: false
    },
    recipientAccountNo: {
        type: String,
        required: false
    },
    chequePhotographs: {
        type: [String],
        required: true
    },
    _id: {                   // id format==username@count
        type: String,
        required: true
    },
    chequeStatus: {
        type: Number, // 0== failed, 1==success, 2==Pending
        required: true,
        default:2
    }

})

export const Cheques=mongoose.model('Cheques',chequeSchema)