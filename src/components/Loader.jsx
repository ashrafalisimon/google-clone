import React from 'react';
import { Puff } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <Puff
                height="550"
                width="80"
                radius={1}
                color="#00BFFF"
                ariaLabel="puff-loading"
                // wrapperStyle={{}}
                // wrapperClass=""
                // visible={true}
            />
        </div>
    );
};

export default Loader;