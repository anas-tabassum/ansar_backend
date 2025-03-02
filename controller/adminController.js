const { updateLessonModel, createLessonModel, deleteLessonModel} = require("../model/User");

const addLesson = async (req, res) => {
    try {
        const response = await createLessonModel(req.body);
        if (response) {
            return res.json({
                data: response,
                status: "success",
                message: "New lesson added",
            });
        } else {
            return res.status(404).json({
                status: "fail",
                message: "Failed to add new lesson",
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

const updateLesson = async (req, res) => {
    try {
        const response = await updateLessonModel(req.body);
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
}

const deleteLesson = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteLessonModel(id);
        if (response) {
            return res.json({
                data: response,
                status: "success",
                message: "Successfully deleted",
            });
        } else {
            return res.status(404).json({
                status: "fail",
                message: "Lesson not found",
            });
        }
    } catch (error) {
        console.error("Error deleting lesson:", error);
        return res.status(500).json({
            status: "error",
            message: "Server error",
        });
    }
}

module.exports = {
    updateLesson,
    addLesson,
    deleteLesson
};
