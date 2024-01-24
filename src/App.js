// App.js
import React, { useState } from "react";
import WordCloud from "./components/WorldCloud";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [wordCloudData, setWordCloudData] = useState([]);

  const generateWordCloud = () => {
    // Tokenize the input text
    const words = inputText.toLowerCase().split(/\s+/);

    // Remove common stop words
    const stopWords = ["the", "and", "is"];
    const filteredWords = words.filter((word) => !stopWords.includes(word));

    // Count the frequency of each unique word
    const wordFrequency = filteredWords.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    // Convert word frequency data to an array of objects
    const wordCloudArray = Object.entries(wordFrequency).map(([word, frequency]) => ({
      word,
      frequency,
    }));

    setWordCloudData(wordCloudArray);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-6">Word Cloud Generator</h1>
      <textarea
        className="w-full h-32 p-2 border rounded-md mb-4"
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={generateWordCloud}
      >
        Generate Word Cloud
      </button>
      <WordCloud data={wordCloudData} />
    </div>
  );
};

export default App;
