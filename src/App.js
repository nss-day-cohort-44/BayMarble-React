import './App.css';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/NavBar';

function App() {
    const user = { id: 1, name: "Bryan" }
    return (
        <div className="app">
            <NavBar />
            <ApplicationViews user={user}/>
        </div>
    );
}

export default App;
