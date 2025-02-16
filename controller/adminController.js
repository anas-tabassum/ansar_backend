const { updateLessonModel } = require("../model/User");

const updateLesson = async (req, res) => {
    try {
        const response = await updateLessonModel(req.body); // ✅ Pass only req.body
        if (response) {
            return res.json({
                data: response,
                status: "success",
                message: "Successfully updated",
            });
        } else {
            return res.status(404).json({
                status: "fail",
                message: "Lesson not found",
            });
        }
    } catch (error) {
        console.error("Error updating lesson:", error);
        return res.status(500).json({
            status: "error",
            message: "Server error",
        });
    }
};

module.exports = {
    updateLesson,
};
