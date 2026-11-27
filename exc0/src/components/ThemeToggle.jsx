import { memo } from 'react'
import { useAppDispatch } from '../context/AppProvider.jsx'

function ThemeToggle() {
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className="btn"
      aria-label="Đổi giao diện sáng hoặc tối"
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
    >
      Đổi giao diện
    </button>
  )
}

export default memo(ThemeToggle)
