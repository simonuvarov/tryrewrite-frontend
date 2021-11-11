import { useContext } from 'react'
import { PaperContext } from '../contexts/PaperContext'

const usePapers = () => useContext(PaperContext)

export default usePapers
