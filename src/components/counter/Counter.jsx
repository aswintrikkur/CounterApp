import { useState } from 'react'
import './Counter.css'


export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        { count > 0 && setCount(prev => (prev - 1)); }
    }
    const handleIncrement = () => {
        setCount(prev => (prev + 1));
    }
    const handleReset = () => {
        setCount(prev => (0));
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
                    <div className="body">

                    </div>
                </div>
            </div>
        </div>
    )
}

