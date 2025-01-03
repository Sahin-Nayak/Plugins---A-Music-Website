import React, { useEffect, useState } from 'react';
import './Player.css';

const Greet = () => {
  const [greeting, setGreeting] = useState('');
  const [currDate, setCurrDate] = useState('');
  const [currTime, setCurrTime] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [fullText, setFullText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const getISTTime = () => {
      const date = new Date();
      const utcOffset = date.getTimezoneOffset() * 60000;
      const istOffset = 5.5 * 60 * 60000;
      const istTime = new Date(date.getTime() + utcOffset + istOffset);
      return istTime;
    };

    const setGreetingMessage = () => {
      const istTime = getISTTime();
      const hours = istTime.getHours();
      if (hours < 12) {
        setGreeting('Good Morning');
      } else if (hours >= 12 && hours < 17) {
        setGreeting('Good Afternoon');
      } else if (hours >= 17 && hours < 20) {
        setGreeting('Good Evening');
      } else {
        setGreeting('Good Night');
      }
    };

    const updateDateTime = () => {
      const istTime = getISTTime();
      setCurrDate(istTime.toLocaleDateString());
      setCurrTime(istTime.toLocaleTimeString());
    };

    setGreetingMessage();
    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setFullText(`Hello Sir, ${greeting}`);
    setTypingIndex(0); // Reset typing index when full text changes
  }, [greeting]);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(typingIndex));
        setTypingIndex(typingIndex + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeoutId); // Clear timeout if effect is re-run
    }
  }, [typingIndex, fullText]);

  return (
    <div className="greet bg-gray-900 text-2xl lg:text-4xl font-extrabold text-yellow-400">
      <center>
        <h1 className='greet-text uppercase text-white'>&nbsp;{displayText}</h1>
      </center>
    </div>
  );
};

export default Greet;
