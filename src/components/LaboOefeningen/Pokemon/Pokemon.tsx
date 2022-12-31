import styles from "./Pokemon.module.css";
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface PokedexResponse {
    results: Pokemon[]
  }
  
  interface Pokemon {
    name: string,
    url: string
  }
  
  interface PokedexProps {
    limit?: number
  }
  
  const LoadingIndicater = () => {
    return (
      <ColorRing
        visible= {true}
        height='80'
        width='80'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
  }
  
  const Pokedex = ({limit= 151}: PokedexProps) => {
    const [pokemon, setPokemon]= useState<Pokemon[]>([]);
    const [loading, setLoading]= useState(false);
    const [filterText, setFilterText]= useState('');
  
    const loadPokemon = async(limit: number) => {
      setLoading(true);
      let respons= await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit);
      let pokedex: PokedexResponse = await respons.json();
      setPokemon(pokedex.results);
      setLoading(false);
    }
  
    useEffect(()=>{
      loadPokemon(limit);
    }, [limit])
  
      return (
        <div>
          {loading && <LoadingIndicater/>}
          <input type="text" onChange={(e)=> setFilterText(e.target.value)} value={filterText}/>
          <ul>
            {pokemon.filter((p) => p.name.toUpperCase().startsWith(filterText.toUpperCase())).map((pokemon)=> {
              return <li>{pokemon.name}</li>
            })}
          </ul>
        </div>
      )
    }

const Pokemon = () => {
    const [limit, setLimit]= useState(10);
    const [activeLimit, setActiveLimit]= useState(10);

    return (
        <>
            <header className={styles.header}>Pokemon</header>
                
                <div className={styles.container}>
                    <Pokedex limit={activeLimit}/>
                    <input type="number" onChange={(e) => setLimit(Number(e.target.value))} value={limit}/>
                    <button onClick={()=> {
                    setActiveLimit(limit);
                    }}>Set Limit</button>
                </div>
                
         </>
        )
  }
  export default Pokemon;