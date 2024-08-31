import "./styles/app.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Dashboard />
        </div>
    );
};

export default App;
