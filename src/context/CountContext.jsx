import { createContext, useState } from "react";

export const CountContext = createContext(0);


export const ConuntProvider = ({ children }) => {

    //   -----------state----------------
    const [count, setCount] = useState(0);
    const [div, setDiv] = useState([]);


    //          -------------function--------
    const handleDecrement = () => {
        { count > 0 && setCount(prev => (prev - 1)); }

        // div.pop(); //this won't work
        // setDiv(div);

        // setDiv(prev=>(prev.pop()));  //this too won't work

        const newDiv = [...div];
        newDiv.pop();
        setDiv(newDiv);
    }
    const handleIncrement = () => {
        if (count < 50) {
            setCount(prev => (prev + 1))
            { (count >= 1 && count < 50) && setDiv([...div, <div className="content"></div>]) }
        };
    }
    const handleReset = () => {
        setCount(0);
        setDiv([]);
    }


    return (
        <CountContext.Provider value={{ count, div, handleIncrement, handleDecrement, handleReset }}  > {children} </CountContext.Provider>
    )

}