import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

// https://google-search72.p.rapidapi.com/search?q=word%20cup&gl=us&lr=lang_en&num=10&start=0

const ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResult = async (url) => {
        setLoading(true);


        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': '99510fbbe3mshf81ff20c8b4c742p1e89f3jsn333eef4d9ff4',
                'X-RapidAPI-Key': '63a733b89emshf811d69767423d2p1d65b3jsn6670b5d7466f',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                // 'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });

        const data = await res.json();


        setResult(data);
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResult, searchTerm, setSearchTerm, loading, result }}>
            {children}
        </ResultContext.Provider>
    );
};
export const useResultContext = () => useContext(ResultContext);
export default ResultContextProvider;