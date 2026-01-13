const QR = require("../models/qrmodel");

exports.createQR = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const qr = await QR.create({
      originalUrl: url,
      qrData: url,
    });

    res.status(201).json(qr);
  } catch (error) {
    res.status(500).json({ message: "QR generation failed" });
  }
};
