// src/hooks/useTechnologies.js
import useLocalStorage from './useLocalStorage';

const initialTechnologies = [
    {
        id: 1,
        title: 'React Components',
        description: 'Изучение базовых компонентов',
        status: 'not-started',
        notes: '',
        category: 'frontend'
    },
    {
        id: 2,
        title: 'JSX Syntax',
        description: 'Освоение синтаксиса JSX',
        status: 'in-progress',
        notes: '',
        category: 'frontend'
    },
    {
        id: 3,
        title: 'State Management',
        description: 'Работа с состоянием компонентов',
        status: 'not-started',
        notes: '',
        category: 'frontend'
    },
    {
        id: 4,
        title: 'Node.js Basics',
        description: 'Основы серверного JavaScript',
        status: 'completed',
        notes: '',
        category: 'backend'
    },
    {
        id: 5,
        title: 'Express Framework',
        description: 'Создание веб-серверов на Express',
        status: 'not-started',
        notes: '',
        category: 'backend'
    }
];

function useTechnologies() {
    const [technologies, setTechnologies] = useLocalStorage('technologies', initialTechnologies);

    // Функция для обновления статуса технологии
    const updateStatus = (techId, newStatus) => {
        setTechnologies(prev =>
            prev.map(tech =>
                tech.id === techId ? { ...tech, status: newStatus } : tech
            )
        );
    };

    // Функция для обновления заметок (ИСПРАВЛЕНА ОПЕЧАТКА)
    const updateNotes = (techId, newNotes) => {
        setTechnologies(prev =>
            prev.map(tech =>
                tech.id === techId ? { ...tech, notes: newNotes } : tech
            )
        );
    };

    // Функция для расчета общего прогресса
    const calculateProgress = () => {
        if (technologies.length === 0) return 0;
        const completed = technologies.filter(tech => tech.status === 'completed').length;
        return Math.round((completed / technologies.length) * 100);
    };

    // Функция для поиска технологий
    const searchTechnologies = (query) => {
        if (!query.trim()) return technologies;

        const lowercaseQuery = query.toLowerCase();
        return technologies.filter(tech =>
            tech.title.toLowerCase().includes(lowercaseQuery) ||
            tech.description.toLowerCase().includes(lowercaseQuery)
        );
    };

    return {
        technologies,
        setTechnologies,
        updateStatus,
        updateNotes,
        searchTechnologies,
        progress: calculateProgress()
    };
}

export default useTechnologies;