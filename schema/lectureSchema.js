const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
        title: {
                    type: String,
                    required: true,
                    trim: true
        },
        url: {
                    type: String,
                    required: true,
                    trim: true
        },
        description: {
                    type: String,
                    required: true,
                    trim: true
        },
        year: {
                    type: String,
                    required: true,
                    trim: true
        }
}, {
        timestamps: true
});

const lecture = mongoose.model('lectures', LectureSchema);
module.exports = lecture;
