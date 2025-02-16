const {
  registerHajjModel,
  registerUmraModel,
  fetchHajjRecords,
  fetchUmraRecords,
  fetchLectures,
} = require("../model/model");
const {
  sendEmailUser,
  sendEmailCompany,
} = require("../controller/emailController");

const { adminAuth } = require("../model/User");

const registerHajjController = async (data, res) => {
  const response = await registerHajjModel(data);
  if (response) {
    await sendEmailUser(data.email, data.name);
    await sendEmailCompany(data);
    res.json({
      status: "success",
      message: "Successfully registered for Hajj",
    });
  } else {
    res.json({
      status: "fail",
      message: "Failed to register for Hajj",
    });
  }
};

const registerUmraController = async (data, res) => {
  const response = await registerUmraModel(data);
  if (response) {
    await sendEmailUser(data.email, data.name);
    await sendEmailCompany(data);
    res.json({
      status: "success",
      message: "Successfully registered for Umra",
    });
  } else {
    res.json({
      status: "fail",
      message: "Failed to register for Umra",
    });
  }
};

const fetchHajjController = async (res) => {
  const response = await fetchHajjRecords();
  if (response) {
    res.json({
      data: response,
      status: "success",
      message: "Successfully registered for Umra",
    });
  } else {
    res.json({
      status: "fail",
      message: "Failed to register for Umra",
    });
  }
};

const fetchUmraController = async (res) => {
  const response = await fetchUmraRecords();
  if (response) {
    res.json({
      data: response,
      status: "success",
      message: "Successfully registered for Umra",
    });
  } else {
    res.json({
      status: "fail",
      message: "Failed to register for Umra",
    });
  }
};

const fetchLecturesController = async (req, res) => {
  const response = await fetchLectures();
  if (response) {
    res.json({
      data: response,
      status: "success",
    });
  } else {
    res.json({
      status: "fail",
      message: "Failed to load lectures",
    });
  }
};

const adminLoginController = async (data, res) => {
  try {
    const response = await adminAuth(data);
    res.status(response.success ? 200 : 401).json(response);
  } catch (error) {
    console.error("Error in adminLoginController:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  registerHajjController,
  registerUmraController,
  fetchHajjController,
  fetchUmraController,
  fetchLecturesController,
  adminLoginController,
};
