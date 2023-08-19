// utils/googleSheets.js

import { google } from 'googleapis';

export async function SubmitHandle(alldata) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'); // Replace line breaks

  const jwtClient = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  try {
    await jwtClient.authorize();
    const sheets = google.sheets('v4');

    // Your code to interact with the sheet goes here
    // For example, you can read or write data to the sheet

    console.log("Authenticated and authorized!");
  } catch (error) {
    console.error("Error:", error);
  }
}
