import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import Loader from './Loader';
const Result = () => {
    const {getResult, searchTerm, loading, result} = useResultContext();
    const location = useLocation();
    console.log(searchTerm);
    useEffect(()=>{  
      // getResult(`${location.pathname}?q=${searchTerm}&gl=us&start=0&num=40`);
      getResult(`${location.pathname}?q=${searchTerm}&gl=us&lr=lang_en&num=10&start=0`);
        
        // /search?q=word%20cup&gl=us&lr=lang_en&num=10&start=0
    },[searchTerm, location.pathname])

    if(loading) return <Loader/>

    // console.log(result?.results[0]);
    switch (location.pathname) {
        case '/search':
            return( 
                <div className='sm:px-56 flex flex-wrap justify-between space-y-6'>
                    {result?.items?.map(({link,title}, index) =>(
                        // console.log(item.url)
                         <div key={index} className="md:w-2/5 w-full">
                         <a href={link} target="_blank" rel="noreferrer">
                           <p className="text-sm">{link}</p>
                           <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                         </a>
                       </div>
                    ))}
                </div>
            );
            case '/imagesearch':
                return (
                  <div className="flex flex-wrap justify-center items-center">
                    {result?.items?.map(({ title, link }, index) => (
                      <a href={link} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                        {/* <img src={link} alt={title} loading="lazy" /> */}
                        <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                      </a>
                    ))}
                  </div>
                );
        default:
          return 'Error...';
    }
};

export default Result;