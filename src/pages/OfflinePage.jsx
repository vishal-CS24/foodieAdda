import React, { useState, useEffect } from "react";
import TicTacToeOffline from "../components/TicTakToe";
function OfflinePage() {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(moveMole, 1000);
    return () => clearInterval(interval);
  }, []);

  const moveMole = () => {
    const x = Math.floor(Math.random() * 10) * 40;
    const y = Math.floor(Math.random() * 10) * 40;
    setMolePosition({ x, y });
  };

  const hitMole = () => {
    setScore(score + 1);
    moveMole();
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Sorry, you are currently offline.</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <TicTacToeOffline />
      </div>
    </div>
  );
}

export default OfflinePage;
