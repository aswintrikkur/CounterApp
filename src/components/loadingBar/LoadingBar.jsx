import React, { useContext } from 'react'
import './LoadingBar.css'
import { CountContext } from '../../context/CountContext'

export const LoadingBar = () => {

    const { count, div } = useContext(CountContext);

    return (
        <div>
            <div className="footer">

                <div className="body"  >
                    {count >= 1 && <div className="content content1" ></div>}
                    {div}
                    {count == 50 && <div className="content content-last" ></div>}
                </div>
            </div>

        </div>
    )
}
