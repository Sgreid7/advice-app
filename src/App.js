import React, { useState, useEffect } from 'react';
import RandomAdvice from "./components/randomAdvice"
import axios from "axios"

const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const resp = await axios.get("https://api.adviceslip.com/advice")

    setAdvice(resp.data.slip.advice)
    console.log(advice)
  }

  useEffect(() => {
    getAdvice()
  },);

  return (
    <div>
      <RandomAdvice advice={advice} />
    </div>
  );
}

export default App;

