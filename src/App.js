import Time from "./components/Time/Time";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import styles from './components/Button/Button.module.scss';
import { useState } from "react";
import { useEffect } from "react";

const App= () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1));
  };
  const stop = () => {
    
    if(timer) clearInterval(timer);
  };
  const reset = () => {
    setTime(0);
    if(timer) clearInterval(timer);
  };



  return (
    <Container>
      <div className={styles.timer}>
        <Time time ={time}/>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => start()}>Start</button>
        <button className={styles.button} onClick={() => stop()}>Stop</button>
        <button className={styles.button} onClick={() => reset()}>Reset</button>
      </div>
      
    </Container>
  );
};

export default App;
