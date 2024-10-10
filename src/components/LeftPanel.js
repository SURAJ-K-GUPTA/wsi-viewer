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
    <div className="p-4 bg-white shadow-md">
      {/* RBC Section */}
      <h3 className="text-lg font-bold mb-2">RBC</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Count</th>
            <th className="border px-4 py-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.rbc.map((cell, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{cell.type}</td>
              <td className="border px-4 py-2">{cell.count}</td>
              <td className="border px-4 py-2">{cell.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* WBC Section */}
      <h3 className="text-lg font-bold mb-2">WBC</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Count</th>
            <th className="border px-4 py-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.wbc.map((cell, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{cell.type}</td>
              <td className="border px-4 py-2">{cell.count}</td>
              <td className="border px-4 py-2">{cell.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Platelets Section */}
      <h3 className="text-lg font-bold mb-2">Platelets</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Count</th>
            <th className="border px-4 py-2">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{data.platelets.count}</td>
            <td className="border px-4 py-2">{data.platelets.percentage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
