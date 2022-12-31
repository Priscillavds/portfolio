import styles from "./ColorSelection.module.css";
import React, { useState } from 'react';


const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState <string[]>([]);
const [showColors, setShowColors] = useState <string[]>([]);

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let selectedOptions: string[] = [];
    for (let option of Array.from(e.target.selectedOptions)) {
      selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
  }
  return (
  <div>
    <div>
        <select multiple value={selectedColors} onChange= {onChange}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        </select>
    </div>
    <div>
        <button onClick={() => {
            setShowColors([...selectedColors]);
        }}>Show colors
        </button>
    </div>
    <div className={styles.colorContainer}>
      {showColors.map((color)=> (
        <div style={{backgroundColor: color, height: 200, width:500, flex: 1}}/>
      ))}
      
    </div>

  </div>
  )
}

const ColorSelection = () => {
    return (
    <>
        <header className={styles.header}>ColorSelection</header>
        
            <div className={styles.child}>
                <ColorSelect/>
            </div>
     </>
    )
  }
  export default ColorSelection;