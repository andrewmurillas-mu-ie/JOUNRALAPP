import React, { useState, useEffect } from "react";
import "../components/TimerApp.css";
import TimerApp from "../components/TimerApp";
import axios from "axios";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

/* Ensure axios and react-icons are installed:
   npm i axios react-icons */
function Quote() {
  return (
    <div className="App">
      <h1> Hello Journal</h1>
      <TimerApp />
      <JournalQuote />
    </div>
  );
}

function JournalQuote() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState();

  const getQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error(error);
    }
  };

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="md:p-32 px-10 flex items-center justify-center flex-col gap-y-20 bg-black w-full h-[100vh] font-sans">
      {randomQuote && (
        <article className="bg-slate-200 shadow-md md:w-auto w-full-10 h-auto rounded-xl p-10 text-black">
          <p className="flex items-start md:flex-row flex-col gap-x-2 bg-slate-400 p-2 rounded-md shadow-md font-medium mb-3">
            <ImQuotesLeft />
            {randomQuote.quote}
            <ImQuotesRight />
          </p>
          <p className="text-gray-500 font-bold">{randomQuote.author}</p>
        </article>
      )}
      <button
        onClick={generateRandomQuote}
        className="text-white border border-white p-2 rounded-lg hover:text-black hover:bg-white transition ease-in-out duration-75"
      >
        Generate Quote
      </button>
    </div>
  );
}

export default Quote;
