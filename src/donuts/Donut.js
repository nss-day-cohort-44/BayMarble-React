/*
    Responsibility: creates a JSX representation of a donut object 
*/
import React from 'react'

/* 
    donutObj is a PROPerty of the Donut component. We defined donutObj as a PROPerty in DonutList.
*/
export const Donut = ({donutObj, taco}) => {
    return (
        <section className="donut__card">
            <h4 className="donut__name">{donutObj.name}</h4>
            <p className="donut__glaze">Glaze: {donutObj.glaze}</p>
            <p className="donut__type">Type: {donutObj.type}</p>
            <p className="donut__flavor">Flavor: {donutObj.flavor}</p>
            <p className="donut__topping">Topping: {donutObj.topping}</p>
        </section>
    )
}