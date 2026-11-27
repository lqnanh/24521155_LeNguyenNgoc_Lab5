import ThemeToggle from './components/ThemeToggle.jsx'
import EvidenceGrid from './components/EvidenceGrid.jsx'
import { useAppDispatch, useAppState } from './context/AppProvider.jsx'

const TABS = [
  { id: 'reels', label: 'Reels' },
  { id: 'chat', label: 'Chat' },
]

function App() {
  const { activeTab } = useAppState()
  const dispatch = useAppDispatch()

  const currentTab = TABS.find((tab) => tab.id === activeTab)

  return (
    <main className="app">
      <h1>Exercise 0</h1>

      <ThemeToggle />

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className="btn"
            aria-pressed={activeTab === tab.id}
            onClick={() => dispatch({ type: 'SET_TAB', payload: tab.id })}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p>Đang ở tab: {currentTab ? currentTab.label : activeTab}</p>

      {activeTab === 'reels' && <EvidenceGrid />}
    </main>
  )
}

export default App
