// src/App.jsx
import './App.css';
import { useState } from 'react';
import useTechnologies from './hooks/useTechnologies';
import TechnologyCard from './components/TechnologyCard';
import Statistics from './components/Statistics';
import QuickActions from './components/QuickActions';
import FilterTabs from './components/FilterTabs';
import ProgressBar from './components/ProgressBar';
import TechnologyModal from './components/TechnologyModal';

function App() {
    const {
        technologies,
        setTechnologies,
        updateStatus,
        updateNotes,
        searchTechnologies,
        progress
    } = useTechnologies();

    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [editingTech, setEditingTech] = useState(null);

    // Функция: изменение статуса технологии
    const changeStatus = (id) => {
        const statusOrder = ['not-started', 'in-progress', 'completed'];
        const tech = technologies.find(t => t.id === id);
        const currentIndex = statusOrder.indexOf(tech.status);
        const nextIndex = (currentIndex + 1) % statusOrder.length;
        updateStatus(id, statusOrder[nextIndex]);
    };

    // Функция: открытие модалки для редактирования заметок
    const openEditModal = (tech) => {
        setEditingTech(tech);
    };

    // Функция: сохранение заметок
    const saveNotes = (techId, notes) => {
        updateNotes(techId, notes);
        setEditingTech(null);
    };

    // Функция: фильтрация технологий
    const filteredTechnologies = searchTechnologies(searchQuery).filter(tech => {
        if (activeFilter === 'all') return true;
        return tech.status === activeFilter;
    });

    return (
        <div className="App">
            <h1>📚 Трекер изучения технологий</h1>

            {/* Прогресс-бар */}
            <div className="progress-section">
                <ProgressBar
                    progress={progress}
                    label="Общий прогресс"
                    color="#4CAF50"
                    animated={true}
                    height={20}
                />
            </div>

            {/* Компонент статистики */}
            <Statistics technologies={technologies} />

            {/* Поиск */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="🔍 Поиск по названию или описанию..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

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

             {/*Список технологий */}
            <div className="technologies-grid">
                {filteredTechnologies.map(tech => (
                    <TechnologyCard
                        key={tech.id}
                        technology={tech}
                        onStatusChange={changeStatus}
                        onEdit={openEditModal}
                    />
                ))}
            </div>

             {/*Модальное окно редактирования*/}
            {/*<TechnologyModal*/}
            {/*    technology={editingTech}*/}
            {/*    onSave={saveNotes}*/}
            {/*    onClose={() => setEditingTech(null)}*/}
            {/*/>*/}
        </div>
    );
}

export default App;