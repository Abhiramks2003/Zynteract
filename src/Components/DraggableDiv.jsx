import { useState } from "react";

const DraggableDiv = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(100); // Initial height

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newHeight = height + e.clientY;
      console.log(e.clientY);
      setHeight(newHeight);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-40 m-4">
        <div
          className="bg-blue-500 cursor-pointer"
          style={{ height: `${height}px` }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1">
            Resize
          </button>
        </div>
      </div>
    </div>
  );
};

export default DraggableDiv;
