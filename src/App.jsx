import { useState } from "react";
import Footer from "./components/Footer";
import MyRoutes from "./components/MyRutes";
import Navbar from "./components/Navbar";

function App() {
    const [darkTheme, setDarkTheme] =useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
     <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 max-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <MyRoutes/> 
        <Footer/>
     </div>
    </div>
  )
}

export default App
