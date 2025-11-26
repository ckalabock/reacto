// src/App.jsx
import './App.css';
import { useState } from 'react';
import TechnologyCard from './components/TechnologyCard';
import Statistics from './components/Statistics';
import QuickActions from './components/QuickActions';
import FilterTabs from './components/FilterTabs';

function App() {
    // СОСТОЯНИЕ: массив технологий
    const [technologies, setTechnologies] = useState([
        { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'not-started' },
        { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
        { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' },
        { id: 4, title: 'Props System', description: 'Передача данных между компонентами', status: 'completed' },
        { id: 5, title: 'Event Handling', description: 'Обработка событий в React', status: 'not-started' }
    ]);

    // СОСТОЯНИЕ: активный фильтр
    const [activeFilter, setActiveFilter] = useState('all');

    // ФУНКЦИЯ: изменение статуса технологии
    const changeStatus = (id) => {
        setTechnologies(prevTech =>
            prevTech.map(tech => {
                if (tech.id === id) {
                    // Циклическое переключение статусов
                    const statusOrder = ['not-started', 'in-progress', 'completed'];
                    const currentIndex = statusOrder.indexOf(tech.status);
                    const nextIndex = (currentIndex + 1) % statusOrder.length;
                    return { ...tech, status: statusOrder[nextIndex] };
                }
                return tech;
            })
        );
    };

    // ФУНКЦИЯ: фильтрация технологий
    const filteredTechnologies = technologies.filter(tech => {
        if (activeFilter === 'all') return true;
        return tech.status === activeFilter;
    });

    return (
        <div className="App">
            <h1>📚 Трекер изучения технологий</h1>

            {/* Компонент статистики */}
            <Statistics technologies={technologies} />

            {/* Быстрые действия */}
            <QuickActions
                technologies={technologies}
                setTechnologies={setTechnologies}
            />

            {/* Фильтры */}
            <FilterTabs
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            {/* Список технологий */}
            <div className="technologies-grid">
                {filteredTechnologies.map(tech => (
                    <TechnologyCard
                        key={tech.id}
                        id={tech.id}
                        title={tech.title}
                        description={tech.description}
                        status={tech.status}
                        onStatusChange={changeStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;