// src/App.jsx
import './App.css';
import Greeting from './Greeting'; // Импортируем наш компонент

function App() {
    return (
        <div className="App">
            <Greeting /> {/* Используем компонент как тег */}
        </div>
    );
}
export default App;