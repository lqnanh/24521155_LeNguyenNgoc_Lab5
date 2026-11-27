import { useMemo } from 'react'
import { useAppState } from '../context/AppProvider.jsx'
import EvidenceCard from './EvidenceCard.jsx'
import FilterBar from './FilterBar.jsx'
import Pagination from './Pagination.jsx'

function EvidenceGrid() {
  const { evidenceList, filterTag, currentPage, pageSize } = useAppState()

  const filteredList = useMemo(() => {
    if (filterTag === '') return evidenceList
    return evidenceList.filter((clip) => clip.tag === filterTag)
  }, [evidenceList, filterTag])

  const totalPages = Math.ceil(filteredList.length / pageSize) || 1

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredList.slice(start, start + pageSize)
  }, [filteredList, currentPage, pageSize])

  return (
    <section className="evidence">
      <FilterBar />

      {pageItems.length === 0 ? (
        <p>Không có clip nào.</p>
      ) : (
        <ul className="grid">
          {pageItems.map((clip) => (
            <li key={clip._id}>
              <EvidenceCard clip={clip} />
            </li>
          ))}
        </ul>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  )
}

export default EvidenceGrid
