const Url = require("../models/Url");
const { nanoid } = require("nanoid");

exports.createShortUrl = async (req, res) => {
  const { longUrl, custom } = req.body;

  const shortId = custom && custom !== "" ? custom : nanoid(6);

  const exists = await Url.findOne({ shortId });
  if (exists) return res.status(400).json({ message: "Custom URL already exists" });

  const newUrl = await Url.create({ longUrl, shortId });

  // Return BOTH full URL and just the short ID
  res.json({ 
    shortUrl: `http://localhost:5001/${newUrl.shortId}`,
    shortId: newUrl.shortId  // Add this to send just the ID separately
  });
};

exports.redirectUrl = async (req, res) => {
  const shortId = req.params.id;

  const url = await Url.findOne({ shortId });
  if (!url) return res.status(404).json({ message: "URL not found" });

  url.clicks++;
  await url.save();

  res.redirect(url.longUrl);
};