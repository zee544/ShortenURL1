const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    qrData: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QR", qrSchema);
