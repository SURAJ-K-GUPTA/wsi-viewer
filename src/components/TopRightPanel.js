import React from 'react';
import slideImage from '../images/wsi.png';
export default function TopRightPanel({ onHover }) {
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.clientWidth;
    const height = target.clientHeight;

    // Calculate the hover percentage relative to the image size
    const xPercentage = offsetX / width;
    const yPercentage = offsetY / height;

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
    </div>
  );
}
