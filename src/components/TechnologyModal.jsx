// src/components/TechnologyModal.jsx
import { useState } from 'react';
import './TechnologyModal.css';

function TechnologyModal({ technology, onSave, onClose }) {
    // Если нет технологии для редактирования, не рендерим ничего
    if (!technology) {
        return null;
    }

    const [notes, setNotes] = useState(technology.notes || '');

    const handleSave = () => {
        onSave(technology.id, notes);
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'not-started':
                return 'Не начато';
            case 'in-progress':
                return 'В процессе';
            case 'completed':
                return 'Завершено';
            default:
                return status;
        }
    };

    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Редактирование: {technology.title}</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="modal-content">
                    <p><strong>Описание:</strong> {technology.description}</p>
                    <p><strong>Статус:</strong> {getStatusText(technology.status)}</p>

                    <div className="form-group">
                        <label>Заметки:</label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Добавьте свои заметки по этой технологии..."
                            rows="6"
                        />
                    </div>

                    <div className="modal-actions">
                        <button onClick={handleSave} className="btn btn-primary">
                            Сохранить
                        </button>
                        <button onClick={onClose} className="btn btn-secondary">
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnologyModal;