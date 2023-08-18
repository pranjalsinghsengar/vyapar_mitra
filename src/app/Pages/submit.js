// pages/api/submit.js
import { writeFile } from "fs/promises";
import ExcelJS from "exceljs";

export default async (req, res) => {
  if (req.method === "POST") {
    const formValues = req.body;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Form Data");

    // Add form data to Excel rows
    worksheet.addRow(["Field", "Value"]); // Header row
    for (const key in formValues) {
      worksheet.addRow([key, formValues[key]]);
    }

    const excelBuffer = await workbook.xlsx.writeBuffer();

    // Save the Excel file or send it as a response
    // For simplicity, we'll save the file temporarily
    try {
      await writeFile("form_data.xlsx", excelBuffer);
      res.status(200).json({ message: "Form data saved as Excel file." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while saving the Excel file." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};
