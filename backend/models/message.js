import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
    message: {
        type: String
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    senderName: {
        type: String
    },
    receiverName: {
        type: String
    },
    senderRegistrationNumber: {
        type: String
    },
    receiverRegistrationNumber: {
        type: String
    },
    roomId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('message', messageSchema);

export default Message;
