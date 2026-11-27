import { useAppDispatch, useAppState } from '../context/AppProvider.jsx'

const FILTERS = [
  { value: '', label: 'Tất cả' },
  { value: 'Himass', label: 'Himass' },
  { value: 'TanVuu', label: 'TanVuu' },
]

function FilterBar() {
  const { filterTag } = useAppState()
  const dispatch = useAppDispatch()

  return (
    <div className="toolbar" role="group" aria-label="Lọc clip theo tag">
      {FILTERS.map((filter) => (
        <button
          key={filter.label}
          type="button"
          className="btn"
          aria-pressed={filterTag === filter.value}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter.value })}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
