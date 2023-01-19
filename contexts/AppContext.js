import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [homePage, setHomePage] = useState(true);
    const [dropDown, setDropDown] = useState(false);

    const openDropDown = () => {
        setDropDown(!dropDown)
    } 

    // Geting current page from localhost
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHomePage(JSON.parse(localStorage.getItem("homePage")));
        }
    }, [homePage, setHomePage, setHomePageState]);

    // Set current page name in Localhost
    function setHomePageState(arg) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('homePage', JSON.stringify(arg))
        }
    }
    

    return (
        <AppContext.Provider
         value={{
            homePage,
            setHomePage,
            setHomePageState,
            dropDown,
            setDropDown,
            openDropDown
         }}
        >
            {children}
        </AppContext.Provider>
    )
}