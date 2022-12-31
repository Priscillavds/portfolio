import styles from "./HomePage.module.css";
import React,{useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { clearLine } from "readline";
import { clear } from "console";
import AnimeChan from "../Apis/AnimeChan";
import RandomDog from "../Apis/RandomDog";



const Home = () => {

    return (
        <>
        <header className={styles.header}>Portfolio van Priscilla Van der Schoot</header>
        
        <main>
            
            <section>
                <h1>Summary</h1>
                <p>My nam is Priscilla Van der Schoot. I'm a student at Artesis Plantijn University College of Antwerp and am studying as programmer. Learning new things is one of the things that I like. I am good in working together wich other people.</p> 
                <h2>Skills</h2>
                <img src={require("./Skills.png")} alt="grafiek" width="500" />
                <div>
                
                </div>          
            </section>
            <figure>
                <img src="fotoPro.jpg" alt="Priscilla" className={styles.priscilla}/>
            </figure>

        </main>
        <footer>
            <div>
                <AnimeChan/>
                <RandomDog/>
            </div>
        </footer>
     </>
    )
  }
  export default Home;