import mongoose from 'mongoose';

const { Schema } = mongoose;

const attendanceSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    totalLecturesByFaculty: {
        type: Number,
        default: 0
    },
    lectureAttended: {
        type: Number,
        default: 0
    }
});

const Attendance = mongoose.model('attendance', attendanceSchema);

export default Attendance;
