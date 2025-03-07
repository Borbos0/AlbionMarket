import React from "react";

const qualities = [1, 2, 3, 4, 5];

const QualitySelector = ({ selectedQuality, setSelectedQuality }) => {
  return (
    <select
      value={selectedQuality}
      onChange={(e) => setSelectedQuality(e.target.value)}
    >
      {qualities.map((q) => (
        <option key={q} value={q}>
          {q}
        </option>
      ))}
    </select>
  );
};

export default QualitySelector;
