// const mongoose = require('mongoose');
import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    donationItem: {
        type: String,
        required: true
    },
    handoverDate: {
        type: Date,
        required: true
    },
    message: {
        type: String
    }
});

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;
