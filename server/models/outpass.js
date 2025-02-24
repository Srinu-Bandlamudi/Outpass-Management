import mongoose from 'mongoose';

const outpassSchema = mongoose.Schema({
    name: {type: String},
    enrollment: {type: String},
    room: {type: String},
    duration: {type: Number},
    fromDate: {type: Date},
    toDate: {type: Date},
    hostel: {type: String},
    purpose: {type: String},
    address: {type: String},
    outpassId: {type: String},
    ImageURL:{type:String}
})

export default mongoose.model("Outpass", outpassSchema, 'Outpasses')