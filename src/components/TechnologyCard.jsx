// src/components/TechnologyCard.jsx
import './TechnologyCard.css';

function TechnologyCard({ id, title, description, status, onStatusChange }) {
    // Обработчик клика по карточке
    const handleClick = () => {
        onStatusChange(id);
    };

    // Получаем иконку и текст в зависимости от статуса
    const getStatusInfo = () => {
        switch (status) {
            case 'not-started':
                return { icon: '⭕', text: 'Не начато', class: 'not-started' };
            case 'in-progress':
                return { icon: '🟡', text: 'В процессе', class: 'in-progress' };
            case 'completed':
                return { icon: '✅', text: 'Завершено', class: 'completed' };
            default:
                return { icon: '⭕', text: 'Не начато', class: 'not-started' };
        }
    };

    const statusInfo = getStatusInfo();

    return (
        <div
            className={`technology-card status-${statusInfo.class}`}
            onClick={handleClick}
        >
            <div className="card-header">
                <h3>{title}</h3>
                <span className="status-icon">{statusInfo.icon}</span>
            </div>
            <p className="description">{description}</p>
            <div className="status-info">
                <span className="status-text">Статус: {statusInfo.text}</span>
            </div>
        </div>
    );
}

export default TechnologyCard;