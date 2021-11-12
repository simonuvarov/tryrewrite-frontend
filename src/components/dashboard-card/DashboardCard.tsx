import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import usePapers from '../../hooks/usePapers'
import { BandLabel } from './BandLabel'
import { Body } from './Body'
import { DeleteButton } from './DeleteButton'
import { MetaInfo } from './MetaInfo'
import { Question } from './Question'
interface DashboardCardProps {
  paper: Paper
}

export const DashboardCard = ({ paper }: DashboardCardProps) => {
  const { deletePaper } = usePapers()
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleDeleteClick = () => {
    deletePaper(paper.id)
  }

  const handleCardClick = () => {
    router.push(`/paper/${paper.id}`)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <article
      className="relative rounded-lg border border-gray-200 bg-white px-10 py-8 shadow-sm transition-shadow duration-200 hover:cursor-pointer hover:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}>
      <DeleteButton onClick={handleDeleteClick} show={isHovered} />
      <BandLabel score={paper.overallBand} className="-ml-0.5" />
      <Question text={paper.question} className="mt-3" />
      <Body text={paper.body} className="mt-2" />
      <footer className="mt-4 flex items-center justify-between">
        {MetaInfo({
          createdAt: paper.createdAt,
          updatedAt: paper.updatedAt
        })}
      </footer>
    </article>
  )
}

export default DashboardCard
