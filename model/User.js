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

const createLessonModel = async ({ title, description, url }) => {
  try {
    if (!title || !description || !url) {
      throw new Error("All fields are required");
    }

    const addLesson = await Lesson.create({ title, description, url })

    return addLesson || null;
  } catch (error) {
    console.error("Error in createLessonModel:", error);
    throw error;
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

    return updatedLesson || null;
  } catch (error) {
    console.error("Error in updateLessonModel:", error);
    throw error;
  }
};

const deleteLessonModel = async (id) => {
  try {
    if (!id) {
      throw new Error("id required");
    }

    const deleteLesson = await Lesson.deleteOne({ _id: id });

    return deleteLesson || null;
  } catch (error) {
    console.error("Error in deleteLessonModel:", error);
    throw error;
  }
};

module.exports = {
  adminAuth,
  createLessonModel,
  updateLessonModel,
  deleteLessonModel
};
