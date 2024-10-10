import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  return (
    <div className="text-xl font-bold text-gray-700 p-2">
      {time.toLocaleString()} {/* Display the current time */}
    </div>
  );
}
