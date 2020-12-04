import React from 'react';
import { TakeNum } from './TakeNum'

export const Home = ({ user }) => {


    const bakers = ["Anita", "Ginger", "Dusty", "Josephine"]



    return (
        <>
            <TakeNum />
            <h1>Welcome to Bay and Marble Doughnut Shoppe, {user.name}</h1>
            <p>We have lovely doughnuts made by an awesome team of bakers!</p>
            <h2>Our Bakers:</h2>
            <ul>
                {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
            </ul>
        </>
    )
}