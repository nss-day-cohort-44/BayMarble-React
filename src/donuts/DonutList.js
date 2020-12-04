/*
    Responsibility: Renders all donuts to the DOM
*/
import React, { useContext, useEffect } from "react"
import { Donut } from "./Donut"
import { DonutContext } from './DonutProvider'

export const DonutList = () => {
    const { donuts, getDonuts } = useContext(DonutContext)

    // This is running ONE TIME, after initial render (because [] is empty)
    useEffect(() => {
        console.log("DONUTLIST useEffect worked!")
        getDonuts()
    }, [])

    // This is WATCHING and RESPONDING to the changes of donuts (because [] has donuts in it)
    useEffect(() => {
        console.log("My dad can beat up your dad, other useEffect!!!")
    }, [donuts])

    return (
        <>
            <h1>Hello, I'm DONUTLIST</h1>
            <div>
                {
                    // Loop over the donut data (donuts) and pass each donut to the Donut component
                    donuts.map(donutObj => {
                        // the "donutObj=" is DEFINING a PROPerty of the Donut component (donutObj gets added as a key/value pair to the props object)
                    return <Donut donutObj={donutObj} taco="taco, hello"/>
                    })
                }
            </div>
        </>
    )
}