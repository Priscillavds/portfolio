import React,{useState, useEffect} from "react";

export interface QuotesVilla {
    fileSizeBytes: number;
    url:           string;
}

const RandomDog = () => {
    const [loading, setLoading]= useState(false);
    const [pictureDog, setpictureDog]= useState('');
    const loadQuote = async() => {
        setLoading(true);
        let respons= await fetch('https://quotes-villa.p.rapidapi.com/quotes/art')
        let Quote: QuotesVilla = await respons.json();
        setpictureDog(Quote.url);
        setLoading(false);
      }
      useEffect(()=> {
        loadQuote();
      }, []);

    return (
        <>
        <img src={pictureDog} />
            
        </>
        
        
    )
}
export default RandomDog;