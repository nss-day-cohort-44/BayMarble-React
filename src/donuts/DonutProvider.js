/*
    Responsiblity: To PROVIDE data about donuts to its children components
*/
import React, { useState } from "react"

export const DonutContext = React.createContext()

export const DonutProvider = (props) => {
    // The STATE of the donut data (array of donuts, and a way to set the donut data)
    const [donuts, setDonuts] = useState([])

    // We need to GET the data before we can use it:
    const getDonuts = () => {
        // fetching the data...
        return fetch("http://localhost:8080/donuts")
            // THEN turn the data (response) into a format that javascript understands (.json())
            .then(response => response.json())
            // THEN we can use our newly parsed donut data...
            .then(parsedDonuts => {
                // and set the state of the donuts to the donuts from the API (parsedDonuts)
                setDonuts(parsedDonuts)
            })
    }

    const printPoop = () => {
        console.log("poop")
    }

    //
    return (
        <DonutContext.Provider value={{
            donuts, getDonuts
        }}>
            {props.children}
        </DonutContext.Provider>
    )
}