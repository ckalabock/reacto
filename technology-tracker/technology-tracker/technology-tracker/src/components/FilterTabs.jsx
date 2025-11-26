import "./FilterTabs.css"

function FilterTabs({ activeFilter, setActiveFilter }) {
  const filters = [
    { key: "all", label: "Все", icon: "🌐" },
    { key: "not-started", label: "Не начатые", icon: "⭕" },
    { key: "in-progress", label: "В процессе", icon: "🟡" },
    { key: "completed", label: "Завершённые", icon: "✅" }
  ]

  return (
    <div className="filter-tabs">
      <h3>🔍 Фильтры</h3>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={"filter-btn " + (activeFilter === filter.key ? "active" : "")}
            onClick={() => setActiveFilter(filter.key)}
          >
            <span className="filter-icon">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTabs
