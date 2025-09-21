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
    if (elapsed >= duration) {
      return "Time's up!";
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
      <div className="form-group">
        <label className="form-label">
          Duration (seconds):
        </label>
        <input 
          type="number" 
          value={duration} 
          onChange={(e) => setDuration(Number(e.target.value))}
          min="1"
          max="3600"
          className="form-input"
        />
      </div>
      <div className="btn-group">
        <button 
          onClick={handleStart} 
          disabled={isRunning}
          className={`btn ${isRunning ? 'btn-secondary' : 'btn-primary'}`}
        >
          ▶️ Start
        </button>
        <button 
          onClick={handleStop} 
          disabled={!isRunning}
          className={`btn ${!isRunning ? 'btn-secondary' : 'btn-danger'}`}
        >
          ⏸️ Stop
        </button>
        <button 
          onClick={handleReset}
          className="btn btn-primary"
        >
          🔄 Reset
        </button>
      </div>
      <div className={`status ${isRunning ? 'status-success' : elapsed > 0 ? 'status-warning' : 'status-info'}`} style={{ 
        borderColor: getStatusColor(),
        color: getStatusColor(),
      }}>
        {getStatus()}
      </div>
    </MainNode>
  );
};
