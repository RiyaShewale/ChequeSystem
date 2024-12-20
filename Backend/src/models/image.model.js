import mongoose from "mongoose"

const imageSchema=new mongoose.Schema({
    fieldname: String,
    originalname: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
})// I have not included the encoding field

export const Images=mongoose.model("Images",imageSchema)