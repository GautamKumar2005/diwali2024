import React, { useEffect, useRef, useState } from 'react';
import './App.css'; // Consider moving specific styles to Diwali.css if preferred

function App() {
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.log("Playback prevented", error);
          });
        }
      }, 0); // 2-second delay

      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  const handlePlayAudio = () => {
    setHasInteracted(true);
  };

  return (
    <>
    <div class="diwali-container">

    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/fireworks-29629.mp3`} type="audio/mpeg" />
      <div className="main-content">
        <div className="para">
          <p>From Gautam Kumar and his Family</p>
        </div>
        <div className="mid">
          <div className="heading">
            <img
              src="https://cdn.pixabay.com/photo/2016/02/07/19/47/diwali-1185462__340.jpg"
              alt="lightsUpLeft"
              className="lightsUpLeft"
            />
            <h1 style={{ fontSize: '1.5rem' }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/16/17/40/diya-3819907__340.jpg"
                alt="diwali_diyasLeft"
                className="diwali_diyasLeft"
              />
              <span>Happy Diwali</span>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/16/17/40/diya-3819907__340.jpg"
                alt="diwali_diyasRight"
                className="diwali_diyasRight"
              />
            </h1>
            <img
              src="https://cdn.pixabay.com/photo/2016/02/07/19/47/diwali-1185462__340.jpg"
              alt="lightsUpRight"
              className="lightsUpRight"
            />
          </div>
          <div className="content">
            <h2 style={{ fontSize: '2rem' }}>
              May thousands of lamps light up your life
              <br />
              with endless happiness and joy.
              <br />
              Wishing you a prosperous and safe Diwali.
            </h2>
            <img
              src="https://cdn.pixabay.com/photo/2016/02/07/19/47/diwali-1185462__340.jpg"
              alt="lightsDownLeft"
              className="lightsDownLeft"
            />
            <img
              src="https://cdn.pixabay.com/photo/2015/10/12/02/26/diwali-983363__340.jpg"
              alt="diyas"
              className="diyas"
            />
            <img
              src="https://cdn.pixabay.com/photo/2016/02/07/19/47/diwali-1185462__340.jpg"
              alt="lightsDownRight"
              className="lightsDownRight"
            />
          </div>
          <button onClick={handlePlayAudio} style={{ marginTop: '20px' }}>
            Start Celebration
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
