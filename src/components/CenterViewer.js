import React, { useState, useCallback } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { throttle } from 'lodash';
import slideImage from '../images/wsi.png';  // Your image path

export default function CenterViewer({ hoverPosition }) {
  const [scale, setScale] = useState(2);  // Default zoom scale
  const [isResetting, setIsResetting] = useState(false);  // Track reset status

  // Throttle the transform setting to prevent excessive updates
  const handleZoom = useCallback(
    throttle((xPercentage, yPercentage, setTransform) => {
      if (!isResetting) {
        const imageWidth = 1920;  // Width of your image
        const imageHeight = 1080;  // Height of your image

        // Calculate the x and y transformation values based on the hover percentage
        const xTransform = -(xPercentage * (imageWidth - (imageWidth / scale))); // Calculate transform based on image size
        const yTransform = -(yPercentage * (imageHeight - (imageHeight / scale)));

        // Apply the transform to zoom into the desired portion of the image
        setTransform(xTransform, yTransform, scale);
      }
    }, 200),  // Throttle zoom updates to every 200ms
    [scale, isResetting]
  );

  return (
    <div className="flex flex-col items-center">
      <TransformWrapper
        initialScale={scale}
        minScale={1}
        maxScale={5}
        centerOnInit={true}
        wheel={{ disabled: false }}
        pan={{ disabled: false }}  // Enable panning (dragging)
        onZoomChange={() => {}}
      >
        {({ zoomIn, zoomOut, setTransform, resetTransform }) => {
          if (hoverPosition.xPercentage !== null && hoverPosition.yPercentage !== null && !isResetting) {
            handleZoom(hoverPosition.xPercentage, hoverPosition.yPercentage, setTransform);
          }

          return (
            <>
              <TransformComponent>
                <img src={slideImage} alt="Whole Slide Image" className="w-full h-auto object-contain" />
              </TransformComponent>

              {/* Zoom Controls */}
              <div className="flex space-x-4 mt-2">
                <button
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={() => zoomIn()}
                >
                  +
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded"
                  onClick={() => zoomOut()}
                >
                  -
                </button>
                <button
                  className="p-2 bg-gray-500 text-white rounded"
                  onClick={() => {
                    setIsResetting(true);
                    resetTransform();  // Reset zoom and pan
                    setTimeout(() => setIsResetting(false), 600);  // Delay to prevent conflict with throttle
                  }}
                >
                  Reset
                </button>
              </div>
            </>
          );
        }}
      </TransformWrapper>
    </div>
  );
}
