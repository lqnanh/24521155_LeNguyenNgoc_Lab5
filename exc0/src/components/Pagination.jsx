import { useAppDispatch } from '../context/AppProvider.jsx'

function Pagination({ currentPage, totalPages }) {
  const dispatch = useAppDispatch()

  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= totalPages

  return (
    <nav className="pagination" aria-label="Phân trang">
      <button
        type="button"
        className="btn"
        disabled={isFirstPage}
        onClick={() => dispatch({ type: 'SET_PAGE', payload: currentPage - 1 })}
      >
        Trước
      </button>

      <span aria-live="polite">
        Trang {currentPage} / {totalPages}
      </span>

      <button
        type="button"
        className="btn"
        disabled={isLastPage}
        onClick={() => dispatch({ type: 'SET_PAGE', payload: currentPage + 1 })}
      >
        Sau
      </button>
    </nav>
  )
}

export default Pagination
