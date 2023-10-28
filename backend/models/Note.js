// const mongoose = require('mongoose')
// const { Schema } = mongoose;

// const NotesSchema = new Schema({
//     user:{
//       type: mongoose.Schema.Types.ObjectId,
//       ref:'user'
//     },
//     // above code is for - user should not able to read each other notes
//     title: {
//       type: String,
//       required: true
//     },
//     description: {
//         type: String,
//         required: true,
//       },
//       tag: {
//         type: String,
//         default: "general"
//       },
//       date: {
//         type: Date,
//         default: Date.now
//       }

// })
// module.exports = mongoose.model('notes', NotesSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  module.exports = mongoose.model('notes', NotesSchema);