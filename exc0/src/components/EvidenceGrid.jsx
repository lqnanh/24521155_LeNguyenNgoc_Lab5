import { useMemo } from 'react'
import { useAppState } from '../context/AppProvider.jsx'
import EvidenceCard from './EvidenceCard.jsx'

function EvidenceGrid() {
  const { evidenceList, filterTag, currentPage, pageSize } = useAppState()

  const filteredList = useMemo(() => {
    if (filterTag === '') return evidenceList
    return evidenceList.filter((clip) => clip.tag === filterTag)
  }, [evidenceList, filterTag])

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredList.slice(start, start + pageSize)
  }, [filteredList, currentPage, pageSize])

  if (pageItems.length === 0) {
    return <p>Không có clip nào.</p>
  }

  return (
    <ul className="grid">
      {pageItems.map((clip) => (
        <li key={clip._id}>
          <EvidenceCard clip={clip} />
        </li>
      ))}
    </ul>
  )
}

export default EvidenceGrid
