import React,{useState, useEffect} from "react";

export interface AnimechanResponse {
    anime:     string;
    character: string;
    quote:     string;
}
const AnimeChan = () => {
    const [loading, setLoading]= useState(false);
    const [animeChanQuote, setAnimeChanQuote]= useState('');
    const loadQuote = async() => {
        setLoading(true);
        let respons= await fetch('https://animechan.vercel.app/api/random')
        let AnimeQuote: AnimechanResponse = await respons.json();
        setAnimeChanQuote(AnimeQuote.quote);
        setLoading(false);
      }
      useEffect(()=> {
        loadQuote();
      }, []);

    return (
        <>
            {animeChanQuote}
        </>
        
        
    )
}
export default AnimeChan;