import  { useState, useCallback } from 'react';

const Mouse = () => {
  const [mouseMoveTime, setMouseMoveTime] = useState<number>(0);
  const [result, setResult] = useState<string>();

  // Handle mouse movement
  const handleMouseMove = useCallback(() => {
    if (mouseMoveTime === null) {
      setMouseMoveTime(performance.now());
    }
  }, [mouseMoveTime]);

  // Handle button click
  const handleClick = () => {
    if (mouseMoveTime !== null) {
      const buttonClickTime = performance.now();
      const timeElapsedMs = buttonClickTime - mouseMoveTime;
      const timeElapsedSec = (timeElapsedMs / 1000).toFixed(2); // Convert milliseconds to seconds
      setResult(`Time from mouse move to button click: ${timeElapsedSec} seconds`);
      setMouseMoveTime(0); 
    } else {
      setResult('Mouse was not moved before clicking the button.');
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: '100vw', height: '100vh', backgroundColor: 'lightgray' }}
    >
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Click Me
      </button>
      {result && <div style={{ position: 'absolute', top: '10px', left: '10px' }}>{result}</div>}
    </div>
  );
};

export default Mouse;
