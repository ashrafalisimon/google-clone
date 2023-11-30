import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Result from './Result';
const MyRoutes = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route  exact path="/" element={  <Navigate to="/search" replace={true} />}>
                </Route>
                <Route exact path="/search" element={<Result/> }>
                </Route>
                <Route exact path="/imagesearch" element={<Result/> }>
                </Route>
                <Route exact path="/news" element={<Result/> }>
                </Route>
                <Route exact path="/videos" element={<Result/> }>
                </Route>
            </Routes>
        </div>
    );
};

export default MyRoutes;