import { useReducer, useState } from 'react'
import './Counter.css'
import { ACTION, counterReducer } from './counterReducer';



export const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        divWidth: 0
    })

    console.log(state);


    return (
        <div>
            <div className="counter-container">
                <h1 className='count'>{state.count} </h1>
                <div className="buttons">
                    <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
                    <button className='reset-btn' onClick={() => dispatch({ type: ACTION.RESET })}>RESET</button>
                    <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
                </div>
                <div className="footer">
                    <div className="body"  >
                        {state.count >= 1 && <div className="content content1" ></div>}
                        <div className="content" style={{ width: `${state.divWidth}%` }} ></div>
                        {state.count == 20 && <div className="content content-last" ></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

