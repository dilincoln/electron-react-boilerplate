import React, { useState, useEffect } from 'react';
import './App.global.css';

import assets from '../assets';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = () => {
      if (count >= assets.length - 1) {
        setCount(0);
      } else {
        counter += 1;
        setCount(counter);
      }
    };

    setTimeout(interval, assets[count].length + 500);
  }, [count]);

  return (
    <div className="slideContent">
      {assets[count].type === 'video' ? (
        <video src={assets[count].media} muted autoPlay />
      ) : (
        <img src={assets[count].media} alt="media" />
      )}
    </div>
  );
};

export default App;
