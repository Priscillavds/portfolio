import styles from "./CounterList.module.css";
import React, { useState } from 'react';

const Counter=()=> {
    const [counters, setCounters] = useState<number[]>([0,4,9]);
  
    const addCounter = () => {
      setCounters ([...counters, 0]);
    }
    const increaseCounter = (index: number) => {
      setCounters(counters.map((counter,i) => i === index ? counter+1 : counter));
      console.log(index);
    }
    const decreaseCounter = (index: number) => {
      setCounters(counters.map((counter,i) => i === index ? counter-1 : counter));
    };
  
    return (
      <div>
        {counters.map((counter, index) => {
          let color= 'black';
          if (counter>0) {
            color = 'green';
          }
          else if (counter<0) {
            color = 'red';
          }
          return (
              <div 
              key={index}
              style={{
              display:'flex',
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent:'center'
              }}
          >
              <button onClick={()=> decreaseCounter(index)}>Omlaag</button>
              <div style={{flex:1, color: color}}>Count: {counter}</div>
              <button onClick= {()=> increaseCounter(index)}>Omhoog</button>
          </div>);
        })}
        <div>Som van de tellers: {counters.reduce((prev, curr)=> prev + curr, 0)}</div>
        <button onClick={addCounter}>Voeg teller toe</button>
      </div>
    );
  }

const CounterList = () => {
    return (
        <>
            <header className={styles.header}>CounterList</header>
            
                <div className={styles.container}>
                    <Counter/>
                </div>
            
         </>
        )
  }
  export default CounterList;