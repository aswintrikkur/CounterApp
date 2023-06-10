import { useState } from 'react'
import './Counter.css'



export const Counter = () => {
    const [count, setCount] = useState(0);
    const [div, setDiv] = useState([]);

    console.log("count: ", count);
    console.log('div length: ', div.length);

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
        if (count < 20) {
            setCount(prev => (prev + 1))
            { (count >= 1 && count < 20) && setDiv([...div, <div className="content"></div>]) }
        };
    }
    const handleReset = () => {
        setCount(0);
        setDiv([]);
    }



    return (
        <div>
            <div className="counter-container">
                <h1 className='count'>{count} </h1>
                <div className="buttons">
                    <button onClick={handleDecrement}>-</button>
                    <button className='reset-btn' onClick={handleReset}>RESET</button>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="footer">
                    <div className="body"  >
                        {count >= 1 && <div className="content content1" ></div>}
                        {div}
                        {count == 20 && <div className="content content-last" ></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

