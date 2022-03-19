const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        evaluation_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluation",
            required: true
        },
        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        marks: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Submission = mongoose.model("submission", submissionSchema);

module.export = Submission;