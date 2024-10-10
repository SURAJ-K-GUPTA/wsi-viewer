import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // For generating tables in PDF
import * as XLSX from 'xlsx'; // For generating Excel files

export default function ReportButton() {
  // Data for both PDF and Excel (can be dynamic)
  const reportData = [
    { type: 'Angled Cells', count: 222, percentage: '67%' },
    { type: 'Burr Cells', count: 87, percentage: '34%' },
    { type: 'Basophil', count: 222, percentage: '67%' },
    { type: 'Eosinophil', count: 50, percentage: '20%' },
  ];

  // Generate PDF with table
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Blood Cell Report", 10, 10);
    
    // Generate a table in the PDF
    doc.autoTable({
      head: [['Cell Type', 'Count', 'Percentage']],
      body: reportData.map(item => [item.type, item.count, item.percentage]),
    });

    doc.save("report.pdf");
  };

  // Generate Excel file
  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(reportData); // Convert JSON data to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Blood Cell Report"); // Append the worksheet
    XLSX.writeFile(workbook, "report.xlsx"); // Download the Excel file
  };

  return (
    <div>
      <button onClick={generatePDF} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
        Download PDF
      </button>
      <button onClick={generateExcel} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Download Excel
      </button>
    </div>
  );
}
