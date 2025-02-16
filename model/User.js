const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schema/user");
const Lesson = require('../schema/lectureSchema');
require("dotenv").config();

const adminAuth = async (data) => {
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return { success: false, message: "Invalid credentials" };
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      return { success: false, message: "Invalid credentials" };
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { success: true, message: "Login successful", token };
  } catch (error) {
    console.error("Error in adminAuth:", error);
    return { success: false, message: "Server error" };
  }
};

const updateLessonModel = async ({ id, title, description, url }) => {
  try {
    if (!id || !title || !description || !url) {
      throw new Error("All fields are required");
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(
        id,
        { title, description, url },
        { new: true }
    );

    return updatedLesson || null; // ✅ Return `null` if not found
  } catch (error) {
    console.error("Error in updateLessonModel:", error);
    throw error; // ✅ Don't send `res.json()` from here
  }
};

module.exports = {
  adminAuth,
  updateLessonModel
};
