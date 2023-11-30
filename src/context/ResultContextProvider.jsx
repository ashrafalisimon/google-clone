import React, { createContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl ='https://google-search74.p.rapidapi.com';

const ResultContextProvider = ({childern}) => {
    const [result, setResult] =useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm]    = useState('');

    const getResult =async (url)=>{
        setLoading(true);
    }

    return (
        <div>
            
        </div>
    );
};

export default ResultContextProvider;