// WordCloud.js
import React from "react";

const WordCloud = ({ data }) => {
  return (
    <div className="mt-8">
      {data.map((item, index) => (
        <span
          key={index}
          style={{ fontSize: `${item.frequency * 8}px` }}
          className="m-2 inline-block font-bold border border-black"
        >
          {item.word}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
