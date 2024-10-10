import React from 'react';

const data = {
  rbc: [
    { type: 'Angled Cells', count: 222, percentage: '67%' },
    { type: 'Borderline Ovalocytes', count: 50, percentage: '20%' },
    { type: 'Burr Cells', count: 87, percentage: '34%' },
  ],
  wbc: [
    { type: 'Basophil', count: 222, percentage: '67%' },
    { type: 'Eosinophil', count: 50, percentage: '20%' },
  ],
  platelets: {
    count: 222,
    percentage: 222,
  },
};

export default function LeftPanel() {
  return (
    <div className="p-4 bg-white shadow-md overflow-x-auto"> {/* Overflow to prevent breaking */}
      {/* RBC Section */}
      <h3 className="text-lg font-bold mb-2">RBC</h3>
      <table className="table-auto w-full text-sm mb-4"> {/* Added text-sm for compactness */}
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Type</th> {/* Reduced padding */}
            <th className="border px-2 py-1">Count</th>
            <th className="border px-2 py-1">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.rbc.map((cell, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{cell.type}</td>
              <td className="border px-2 py-1 text-center">{cell.count}</td> {/* Center align */}
              <td className="border px-2 py-1 text-center">{cell.percentage}</td> {/* Center align */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* WBC Section */}
      <h3 className="text-lg font-bold mb-2">WBC</h3>
      <table className="table-auto w-full text-sm mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">Count</th>
            <th className="border px-2 py-1">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.wbc.map((cell, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{cell.type}</td>
              <td className="border px-2 py-1 text-center">{cell.count}</td>
              <td className="border px-2 py-1 text-center">{cell.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Platelets Section */}
      <h3 className="text-lg font-bold mb-2">Platelets</h3>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Count</th>
            <th className="border px-2 py-1">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border px-2 py-1 text-center">{data.platelets.count}</td>
            <td className="border px-2 py-1 text-center">{data.platelets.percentage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
