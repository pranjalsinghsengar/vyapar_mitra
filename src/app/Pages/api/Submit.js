// submit.js

require('dotenv').config(); // Load environment variables from .env
const { google } = require('googleapis');

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;
const sheetId = process.env.GOOGLE_SHEET_ID;

const jwtClient = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SubmitHandle = async (alldata) => {
    
  try {
    await jwtClient.authorize();
    const sheets = google.sheets('v4');

    // Your code to interact with the sheet goes here
    // For example, you can read or write data to the sheet

    console.log("Authenticated and authorized!");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = SubmitHandle;
