import clips from '../data/clips.js'

export const initialState = {
  theme: 'dark',
  activeTab: 'reels',
  evidenceList: clips,
  filterTag: '',
  currentPage: 1,
  pageSize: 6,
}

export function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }

    case 'SET_TAB':
      return {
        ...state,
        activeTab: action.payload,
      }

    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      }

    case 'SET_FILTER':
      return {
        ...state,
        filterTag: action.payload,
        currentPage: 1,
      }

    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
