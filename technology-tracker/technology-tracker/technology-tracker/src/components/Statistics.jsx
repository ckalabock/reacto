import "./Statistics.css"

function Statistics({ technologies }) {
  const total = technologies.length
  const completed = technologies.filter(tech => tech.status === "completed").length
  const inProgress = technologies.filter(tech => tech.status === "in-progress").length
  const notStarted = technologies.filter(tech => tech.status === "not-started").length
  
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="statistics">
      <h2>📊 Статистика прогресса</h2>
      
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Всего технологий</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{completed}</span>
          <span className="stat-label">Изучено</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{inProgress}</span>
          <span className="stat-label">В процессе</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-number">{notStarted}</span>
          <span className="stat-label">Не начато</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span>Общий прогресс: {completionPercentage}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: completionPercentage + "%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
