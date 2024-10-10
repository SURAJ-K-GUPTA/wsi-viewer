import React, { useState } from 'react';
import slideImage from '../images/wsi.png';

export default function TopRightPanel({ onHover }) {
  const [hoverBox, setHoverBox] = useState({ x: 0, y: 0, width: 60, height: 30 }); // Define initial size of the hover box

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.clientWidth;
    const height = target.clientHeight;

    // Calculate the hover percentage relative to the image size
    const xPercentage = offsetX / width;
    const yPercentage = offsetY / height;

    // Update the hover box position
    const boxWidthSize = 60; // Size of the box (you can adjust this based on how big you want the hover box)
    const boxHeightSize = 30
    let x = offsetX - boxWidthSize / 2; // Center the box on the cursor
    let y = offsetY - boxHeightSize / 2;

    // Make sure the box doesn't go outside the image bounds
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + boxWidthSize > width) x = width - boxWidthSize;
    if (y + boxHeightSize > height) y = height - boxHeightSize;

    setHoverBox({ x, y, width: boxWidthSize, height: boxHeightSize });

    // Pass the hover percentage to the parent component (CenterViewer)
    onHover(xPercentage, yPercentage);
  };

  return (
    <div className="relative w-full h-48 bg-gray-200 mb-4">
      <img
        src={slideImage}
        alt="Zoomed Out View"
        className="w-full h-full object-cover cursor-zoom-in" // Add cursor-zoom-in for + sign
        onMouseMove={handleMouseMove} // Track mouse move
        onMouseLeave={() => onHover(null, null)} // Reset on mouse leave
      />
      {/* Hover box */}
      <div
        className="absolute border border-blue-500 object-cover cursor-zoom-in"
        style={{
          left: `${hoverBox.x}px`,
          top: `${hoverBox.y}px`,
          width: `${hoverBox.width}px`,
          height: `${hoverBox.height}px`,
        }}
      />
    </div>
  );
}
