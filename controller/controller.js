const {
  registerHajjModel,
  registerUmraModel,
  fetchHajjRecords,
  fetchUmraRecords,
} = require("../model/model");
const {sendEmail} = require('../controller/emailController')

const registerHajjController = async (data, res) => {
  const response = await registerHajjModel(data);
  if (response) {
    await sendEmail(data.email,data.name)
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
    await sendEmail(data.email,data.name)
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

module.exports = {
  registerHajjController,
  registerUmraController,
  fetchHajjController,
  fetchUmraController,
};
