import React from "react";

const PercentageChart = ({ percentage = 50 }: any) => {
  return (
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke-dasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

export default PercentageChart;
