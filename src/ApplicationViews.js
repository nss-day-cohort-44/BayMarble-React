/*
    Responsibility: Watching the URL, and rendering the appropriate component
*/
import React from 'react'
import { Route } from 'react-router-dom'
import { DonutList } from './donuts/DonutList'
import { DonutProvider } from './donuts/DonutProvider'
import { FAQ } from './FAQ'
import { Home } from './Home'

export const ApplicationViews = ({ user }) => {
    return (
        <>
            {/* If the route looks like this: "localhost:3000/" render Home component */}
            <Route exact path="/">
                <Home user={user} />
            </Route>
            {/* If the route looks like this: "localhost:3000/FAQ" render FAQ component*/}
            <Route path="/FAQ">
                <FAQ />
            </Route>
            {/* DonutProvider is PROVIDING data to its children components: DonutList */}
            <DonutProvider>
                {/* If the route looks like this: "localhost:3000/donuts" render DonutList component */}
                <Route path="/donuts">
                    <DonutList />
                </Route>
            </DonutProvider>
        </>
    )
}