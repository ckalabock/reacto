// src/components/QuickActions.jsx
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

    // Действие: экспорт данных
    const exportData = () => {
        const data = {
            exportedAt: new Date().toISOString(),
            technologies: technologies
        };
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `technologies-export-${new Date().getTime()}.json`;
        link.click();
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
                    className="action-btn export-data"
                    onClick={exportData}
                >
                    📤 Экспорт данных
                </button>
            </div>
        </div>
    );
}

export default QuickActions;