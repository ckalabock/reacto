import "./QuickActions.css"

function QuickActions({ technologies, setTechnologies }) {
  const markAllCompleted = () => {
    setTechnologies(prevTech => 
      prevTech.map(tech => ({ ...tech, status: "completed" }))
    )
  }

  const resetAll = () => {
    setTechnologies(prevTech => 
      prevTech.map(tech => ({ ...tech, status: "not-started" }))
    )
  }

  const randomNext = () => {
    const notCompleted = technologies.filter(tech => 
      tech.status !== "completed"
    )
    
    if (notCompleted.length === 0) {
      alert("Все технологии уже изучены! 🎉")
      return
    }
    
    const randomTech = notCompleted[Math.floor(Math.random() * notCompleted.length)]
    
    setTechnologies(prevTech => 
      prevTech.map(tech => 
        tech.id === randomTech.id 
          ? { ...tech, status: "in-progress" }
          : tech
      )
    )
    
    alert("Следующая технология: " + randomTech.title + " 🎯")
  }

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
          🎲 Случайный выбор следующей технологии
        </button>
      </div>
    </div>
  )
}

export default QuickActions
