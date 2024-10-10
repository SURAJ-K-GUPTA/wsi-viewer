import React, { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import CenterViewer from "./components/CenterViewer";
import TopRightPanel from "./components/TopRightPanel";
import ReportButton from "./components/ReportButton";
import Timer from "./components/Timer";
import PatientInfo from "./components/PatientInfo";

function App() {
  const [hoverPosition, setHoverPosition] = useState({
    xPercentage: null,
    yPercentage: null,
  });

  const handleHover = (xPercentage, yPercentage) => {
    // Update the hover position only if valid (not null)
    setHoverPosition({
      xPercentage: xPercentage,
      yPercentage: yPercentage,
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4 min-h-screen bg-gray-100">
      <div className="col-span-4 text-center">
        <Timer /> {/* Show real-time clock */}
      </div>
      <div className="col-span-1">
        <LeftPanel />
      </div>
      <div className="col-span-2 flex justify-center items-start ">
        <CenterViewer hoverPosition={hoverPosition} />
      </div>
      <div className="col-span-1">
        <TopRightPanel onHover={handleHover} />
        <PatientInfo />
        <ReportButton />
      </div>
    </div>
  );
}

export default App;
