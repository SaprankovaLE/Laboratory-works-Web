import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (<div>Reverse Timer: {count}</div>);
};

export default Timer;
