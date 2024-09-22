const hajjSchema = require("../schema/hajjSchema");
const umraSchema = require("../schema/umraSchema");

const registerHajjModel = async (data) => {
  try {
    const hajjBooking = new hajjSchema(data);
    await hajjBooking.save();
    return true;
  } catch (error) {
    console.error("Error saving Hajj booking:", error);
    return false;
  }
};

const registerUmraModel = async (data) => {
  try {
    const umraBooking = new umraSchema(data);
    await umraBooking.save();
    return true;
  } catch (error) {
    console.error("Error saving Umra booking:", error);
    return false;
  }
};

// Fetch Hajj records
const fetchHajjRecords = async () => {
  try {
    const records = await hajjSchema.find();
    return records;
  } catch (error) {
    console.error("Error fetching Hajj records:", error);
    return [];
  }
};

// Fetch Umra records
const fetchUmraRecords = async () => {
  try {
    const records = await umraSchema.find();
    return records;
  } catch (error) {
    console.error("Error fetching Umra records:", error);
    return [];
  }
};

module.exports = {
  registerHajjModel,
  registerUmraModel,
  fetchHajjRecords,
  fetchUmraRecords,
};
