import { useContext, useState } from 'react'
import './Counter.css'
import { CountContext } from '../../context/CountContext'
import { LoadingBar } from '../loadingBar/LoadingBar'



export const Counter = () => {

    const { count, handleIncrement, handleDecrement, handleReset } = useContext(CountContext)


    return (
        <div>
            <div className="counter-container">
                <h1 className='count'>{count} </h1>
                <div className="buttons">
                    <button onClick={handleDecrement}>-</button>
                    <button className='reset-btn' onClick={handleReset}>RESET</button>
                    <button onClick={handleIncrement}>+</button>
                </div>
                    <LoadingBar />
            </div>
        </div>
    )
}

