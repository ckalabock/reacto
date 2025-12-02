// src/components/TechnologyCard.jsx
import './TechnologyCard.css';

function TechnologyCard({ technology, onStatusChange, onEdit }) {
    const { id, title, description, status, notes } = technology;

    const handleClick = () => {
        onStatusChange(id);
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        onEdit(technology);
    };

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
                <div className="card-actions">
                    <button className="edit-btn" onClick={handleEditClick} title="Редактировать заметки">
                        📝
                    </button>
                    <span className="status-icon">{statusInfo.icon}</span>
                </div>
            </div>
            <p className="description">{description}</p>
            {notes && (
                <div className="notes-preview">
                    <strong>Заметки:</strong> {notes.substring(0, 50)}...
                </div>
            )}
            <div className="status-info">
                <span className="status-text">Статус: {statusInfo.text}</span>
            </div>
        </div>
    );
}

export default TechnologyCard;