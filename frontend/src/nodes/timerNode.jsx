import { useState, useEffect } from "react";
import MainNode from "../MainNode";

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 60);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning && startTime) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);
        setElapsed(elapsedSeconds);
        
        if (elapsedSeconds >= duration) {
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime, duration]);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setStartTime(null);
    setElapsed(0);
  };

  const getStatus = () => {
    if (isRunning) {
      const remaining = Math.max(0, duration - elapsed);
      return remaining > 0 ? `Running: ${remaining}s left` : "Time's up!";
    }
    return elapsed > 0 ? `Stopped at ${elapsed}s` : "Ready to start";
  };

  const getStatusColor = () => {
    if (isRunning) return "#28a745";
    if (elapsed > 0) return "#ffc107";
    return "#6c757d";
  };

  return (
    <MainNode id={id} title="Timer" outputs={["status"]}>
      <label>
        Duration (seconds):
        <input 
          type="number" 
          value={duration} 
          onChange={(e) => setDuration(Number(e.target.value))}
          min="1"
          max="3600"
        />
      </label>
      <div style={{ display: "flex", gap: "4px", marginTop: "6px" }}>
        <button onClick={handleStart} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop Timer
        </button>
        <button onClick={handleReset}>
          Reset Timer
        </button>
      </div>
      <div style={{ 
        marginTop: "6px", 
        color: getStatusColor(), 
        fontWeight: "bold" 
      }}>
        Status: {getStatus()}
      </div>
    </MainNode>
  );
};
