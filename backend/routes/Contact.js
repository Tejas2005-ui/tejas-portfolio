const express = require("express");
const Message = require("../models/message");

const router = express.Router();

// =================================
// POST CONTACT MESSAGE
// =================================

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    // Save to MongoDB
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

module.exports = router;