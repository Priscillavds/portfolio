import React, { useEffect, useState } from 'react';
import styles from "./Interval.module.css";

const getRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max- min)) + min;
  }
  
  interface RandomValueProps {
    min: number;
    max: number;
  }
  
  const RandomValue = ({min, max} : RandomValueProps) => {
    const [randomValue, setRandomValue] = useState(getRandomValue(min,max));
  
    useEffect(()=>{
      let handle = setInterval(()=> {
        setRandomValue(getRandomValue(min,max));
      }, 1000);
  
      return () => {
        clearInterval(handle);
      }
    },[]);
  
    return (
      <p>Random value between {min} and {max}: {randomValue}</p>
    )
  }
  
  const Timer = () => {
    const [time, setTime] = useState(0);
  
    useEffect(()=>{
      let handle = setInterval(()=> {
        setTime((time) => time+1);
      }, 1000);
  
      return () => {
        clearInterval(handle);
      }
    },[]);
  
    return (
      <>
        {time}
      </>
    )
  }
  
  const CurrentTime = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(()=>{
      let handle = setInterval(()=> {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(handle);
      }
    },[]);
  
    return (
      <>
        {time.toLocaleTimeString()}
      </>
    )
  }

const Interval = () => {
    return (
        <>
            <header className={styles.header}>Interval</header>
            
                <div className={styles.container}>
                    <div><Timer/></div>
                    <div><CurrentTime/></div>
                    <div><RandomValue min={1} max={100}/></div>
                    <div>
                        <RandomValue min={100} max={200}/>
                    </div>
                </div>
            
            
         </>
        )
  }
  export default Interval;