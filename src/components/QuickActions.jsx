import './QuickActions.css';

function QuickActions({ technologies, setTechnologies }) {
    // Действие: отметить все как выполненные
    const markAllCompleted = () => {
        setTechnologies(prevTech =>
            prevTech.map(tech => ({ ...tech, status: 'completed' }))
        );
    };

    // Действие: сбросить все статусы
    const resetAll = () => {
        setTechnologies(prevTech =>
            prevTech.map(tech => ({ ...tech, status: 'not-started' }))
        );
    };

    // Действие: случайный выбор следующей технологии (ТОЛЬКО НЕ НАЧАТЫЕ)
    const randomNext = () => {
        // Фильтруем ТОЛЬКО технологии со статусом "not-started"
        const notStartedTechs = technologies.filter(tech => tech.status === 'not-started');

        if (notStartedTechs.length === 0) {
            alert('Все технологии уже начаты или изучены! 🎉\n\nИспользуйте кнопку "Сбросить все статусы", чтобы начать заново.');
            return;
        }

        // Выбираем случайную технологию из не начатых
        const randomTech = notStartedTechs[Math.floor(Math.random() * notStartedTechs.length)];

        // Устанавливаем выбранной технологии статус "in-progress"
        setTechnologies(prevTech =>
            prevTech.map(tech =>
                tech.id === randomTech.id
                    ? { ...tech, status: 'in-progress' }
                    : tech
            )
        );

        alert(`🎯 Следующая технология для изучения:\n\n"${randomTech.title}"\n\n${randomTech.description}`);
    };

    return (
        <div className="quick-actions">
            <h3>⚡ Быстрые действия</h3>
            <div className="actions-buttons">
                <button
                    className="action-btn complete-all"
                    onClick={markAllCompleted}
                >
                    ✅ Отметить все как выполненные
                </button>

                <button
                    className="action-btn reset-all"
                    onClick={resetAll}
                >
                    🔄 Сбросить все статусы
                </button>

                <button
                    className="action-btn random-next"
                    onClick={randomNext}
                >
                    🎲 Случайный выбор из не начатых
                </button>
            </div>
        </div>
    );
}

export default QuickActions;