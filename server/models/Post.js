const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:{
        type: String,
        require:true.valueOf,
    },
    description:{
        type: String,
    },
    url:{
        type: String,
    },
    status:{
        type: String,
        enum: ["To learn","Learning","Learned"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
})

module.exports = mongoose.model('post',PostSchema)