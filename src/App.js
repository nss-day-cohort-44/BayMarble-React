import './App.css';
import { FAQ } from './FAQ';
import { Home } from './Home'

function App() {
    const user = { id: 1, name: "Bryan" }
    return (
        <div className="app">
            <FAQ />
            <Home user={user} />
        </div>
    );
}

export default App;
