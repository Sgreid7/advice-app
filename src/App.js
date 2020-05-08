import React, { useState, useEffect, useCallback } from "react";
import RandomAdvice from "./components/randomAdvice";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = useCallback(async () => {
    const resp = await axios.get("https://api.adviceslip.com/advice");

    setAdvice(resp.data.slip.advice);
    console.log(advice);
  });

  useEffect(() => {
    getAdvice();
  }, [advice, getAdvice]);

  return (
    <div>
      <RandomAdvice advice={advice} generateAdvice={getAdvice} />
    </div>
  );
};

export default App;
